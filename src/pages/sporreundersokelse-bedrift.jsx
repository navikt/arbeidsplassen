import { BodyLong, Button, ErrorSummary, Heading, Link, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { trackAmplitudeEvent } from "@/src/common/analysis/metrics";

const QUESTION_1 = "Hvor mange av jobbsøkerne som har tatt kontakt virker aktuelle?";
const QUESTION_1_ID = "hvor_mange_av_jobbsokerne_som_har_tatt_kontakt_virker_aktuelle";
const QUESTION_2 = "Ville du brukt arbeidsplassen.no neste gang du skal rekruttere?";
const QUESTION_2_ID = "ville_du_brukt_arbeidsplassen_no_neste_gang_du_skal_rekruttere";

export default function SporreundersokelseBedrift() {
    const [surveyMetadata, setSurveyMetadata] = useState({});
    const [question1Answer, setQuestion1Answer] = useState(undefined);
    const [question2Answer, setQuestion2Answer] = useState(undefined);

    // Skip validation until Send button has been clicked at least once
    const [skipValidation, setSkipValidation] = useState(true);

    const [isErrorSummaryVisible, setIsErrorSummaryVisible] = useState(false);
    const [hasSentAnswers, setHasSentAnswers] = useState(false);

    const errorSummaryRef = useRef(null);
    const thankYouHeadingRef = useRef(null);

    function validateForm() {
        const hasErrors = question1Answer === undefined || question2Answer === undefined;

        if (!hasErrors) {
            setIsErrorSummaryVisible(false);
        }

        return hasErrors;
    }

    function sendAmplitudeEvent() {
        trackAmplitudeEvent("Answered survey question", {
            question: QUESTION_1,
            answer: question1Answer,
            ...surveyMetadata,
        });
        trackAmplitudeEvent("Answered survey question", {
            question: QUESTION_2,
            answer: question2Answer,
            ...surveyMetadata,
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        setSkipValidation(false);
        const hasErrors = validateForm();

        if (!hasErrors) {
            sendAmplitudeEvent();
            setHasSentAnswers(true);
        } else if (isErrorSummaryVisible) {
            if (errorSummaryRef.current) {
                errorSummaryRef.current.focus();
            }
        } else {
            setIsErrorSummaryVisible(true);
        }
    }

    useEffect(() => {
        if (errorSummaryRef.current && isErrorSummaryVisible) {
            errorSummaryRef.current.focus();
        }
    }, [isErrorSummaryVisible]);

    useEffect(() => {
        if (!skipValidation) {
            validateForm();
        }
    }, [question1Answer, question2Answer]);

    useEffect(() => {
        // To help screen reader users, set focus to h1 when "Thank you" section is shown
        if (hasSentAnswers && thankYouHeadingRef.current) {
            thankYouHeadingRef.current.focus();
            window.scrollTo(0, 0);
        }
    }, [hasSentAnswers]);

    useEffect(() => {
        let metadata = {};
        try {
            const url = new URL(window.location.href);
            const searchParams = new URLSearchParams(url.search);
            if (searchParams.has("f")) {
                const values = searchParams.get("f").split("");
                metadata = {
                    ...metadata,
                    soknad_ekstern_lenke: values[0] === "1",
                    soknad_e_post: values[1] === "1",
                    superrask_soknad: values[2] === "1",
                };
            }
            setSurveyMetadata(metadata);
        } catch (err) {
            setSurveyMetadata({});
        }
    }, []);

    const errorSummaryItems = [];
    if (question1Answer === undefined) {
        errorSummaryItems.push(
            <ErrorSummary.Item key={QUESTION_1_ID} href={`#${QUESTION_1_ID}`}>
                {QUESTION_1}
            </ErrorSummary.Item>,
        );
    }
    if (question2Answer === undefined) {
        errorSummaryItems.push(
            <ErrorSummary.Item key={QUESTION_2_ID} href={`#${QUESTION_2_ID}`}>
                {QUESTION_2}
            </ErrorSummary.Item>,
        );
    }

    return (
        <Layout>
            <Head>
                <title>Spørreundersøkelse - arbeidsplassen.no</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                {!hasSentAnswers ? (
                    <form onSubmit={onFormSubmit}>
                        <Heading spacing size="large" level="1">
                            En meget kort spørreundersøkelse for deg som nylig har rekruttert
                        </Heading>
                        <BodyLong className="mb-2">
                            Vi vil gjerne vite hvordan vi kan forbedre opplevelsen din til neste gang.
                            Spørreundersøkelsen er frivillig.
                        </BodyLong>

                        {isErrorSummaryVisible && (
                            <ErrorSummary
                                ref={errorSummaryRef}
                                heading="Du må velge et svar i følgende spørsmål før du sender inn:"
                                className="mb-2"
                            >
                                {errorSummaryItems}
                            </ErrorSummary>
                        )}

                        <RadioGroup
                            id={QUESTION_1_ID}
                            legend={QUESTION_1}
                            className="mb-2"
                            onChange={(value) => setQuestion1Answer(value)}
                            error={
                                isErrorSummaryVisible && question1Answer === undefined
                                    ? `Velg hvor mange av jobbsøkerne som har tatt kontakt som virker aktuelle. Er du usikker kan du velge Vet ikke.`
                                    : undefined
                            }
                        >
                            <Radio value="Nesten alle">Nesten alle</Radio>
                            <Radio value="En hel del">En hel del</Radio>
                            <Radio value="Noen få">Noen få</Radio>
                            <Radio value="Ingen">Ingen</Radio>
                            <Radio value="Vet ikke">Vet ikke</Radio>
                        </RadioGroup>

                        <RadioGroup
                            id={QUESTION_2_ID}
                            legend={QUESTION_2}
                            className="mb-2"
                            onChange={(value) => setQuestion2Answer(value)}
                            error={
                                isErrorSummaryVisible && question2Answer === undefined
                                    ? "Velg om du ville brukt arbeidsplassen.no neste gang du skal rekruttere. Er du usikker kan du velge Vet ikke."
                                    : undefined
                            }
                        >
                            <Radio value="Ja">Ja</Radio>
                            <Radio value="Nei">Nei</Radio>
                            <Radio value="Vet ikke">Vet ikke</Radio>
                        </RadioGroup>
                        <Button
                            type="submit"
                            variant="primary"
                            onClick={(e) => {
                                onFormSubmit(e);
                            }}
                        >
                            Send inn svar
                        </Button>
                    </form>
                ) : (
                    <>
                        <Heading tabIndex="-1" spacing size="large" level="1" ref={thankYouHeadingRef}>
                            Takk for svaret!
                        </Heading>
                        <BodyLong spacing>
                            Uten tilbakemeldingen din ville vi ikke klart å lage bedre tjenester.
                        </BodyLong>
                        <Heading size="small" level="2" className="mb-0_5">
                            Er noe du savner eller synes kunne vært bedre?
                        </Heading>
                        <BodyLong className="mb-0_5">
                            Vi setter stor pris på å høre mer om hvordan vi kan forbedre tjenestene våre for deg.
                            Tilbakemeldingen din vil være anonym.
                        </BodyLong>

                        <BodyLong>
                            <Link href="https://surveys.hotjar.com/94ceef29-ea1d-41ca-8c42-a455019b394b">
                                Skriv en kort tilbakemelding
                            </Link>
                        </BodyLong>
                    </>
                )}
            </article>
        </Layout>
    );
}
