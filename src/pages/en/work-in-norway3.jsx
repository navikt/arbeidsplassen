import { BodyLong, Heading, Label, BodyShort, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";
import { LinkPanel } from "@navikt/ds-react";

export default function workInNorwayEn() {
    return (
        <Layout>
            <Head>
                <title>Information about working in Norway for Ukrainian refugees - arbeidsplassen.no</title>
            </Head>
            <div className="green-box">
                <div className="green-box-inner">
                    <Label as="p" className="mb-0_25">
                        Finding a job
                    </Label>
                    <BodyShort>Information about working in Norway for Ukrainian refugees</BodyShort>
                </div>
            </div>
            <div className="flex">
                <nav>
                    Contents
                    <ul>
                        <li>When can I start looking for a job?</li>
                        <li>Where can I find a job?</li>
                        <li>Who can I contact for assistance and guidance?</li>
                        <li>Where can I work without norwegian language skills?</li>
                    </ul>
                    <a>Back to main page</a>
                </nav>
                <article className="container-small page-margin-top-and-bottom ukraine-page" lang="en">
                    <Heading size="xlarge" level="1" spacing>
                        When can I start looking for a job?
                    </Heading>
                    <BodyLong>
                        You must have been granted collective protection before you can start searching for and applying
                        for jobs.. You cannot apply for jobs or work while The Norwegian Directorate of Immigration
                        (UDI) processes your application.
                    </BodyLong>
                    <Heading size="xlarge" level="1" spacing>
                        Relevant news and articles
                    </Heading>
                    <div className="arb-link-panel-grid mb-5">
                        <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/cv">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Questions and answers around collective protection
                            </LinkPanel.Title>
                        </LinkPanel>
                        <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/cv">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Protection for those who have fled Ukraine
                            </LinkPanel.Title>
                        </LinkPanel>
                        <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/cv">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Are you intending to work in Norway?
                            </LinkPanel.Title>
                        </LinkPanel>
                    </div>
                    <Heading size="xlarge" level="1" spacing>
                        Who can I contact for assistance and guidance?
                    </Heading>
                    <BodyLong>
                        You can look for a job at arbeidsplassen.no. This is one of the largest database for job
                        advertisements in Norway. Here you can also find job advertisements in english.
                    </BodyLong>
                    <BodyLong>
                        With “Jobbtreff “ (norwegian language) at arbeidsplassen.no you can follow a live broadcast
                        where companies present themselves and the positions you can apply for. Jobbtreff is mainly held
                        in norwegian. Take a look at “Se kommende jobbtreff” if you can find someone in english.
                    </BodyLong>
                    <Heading size="xlarge" level="1" spacing>
                        Who can I contact for assistance and guidance?
                    </Heading>
                    <BodyLong>
                        If you need assistance finding a job, you can contact NAV for information and guidance. If you
                        are registered as a job seeker at NAV, NAV can help you to get in touch with relevant employers
                        and provide you with various measures in order to get a job. You can register as a job seeker at
                        nav.no. If you need assistance you can contact your local NAV office.
                    </BodyLong>
                    <BodyLong>You have the right to get an interpreter. when contacting NAV.</BodyLong>
                    <BodyLong>If you have questions, please call NAV at 55 55 33 33</BodyLong>
                    <Heading size="xlarge" level="1" spacing>
                        Where can I work without norwegian language skills?
                    </Heading>
                    <BodyLong>
                        Employers might set up language requirements through the job advertisement. If you can
                        communicate in basic english, you can look for job advertisement in english or where english is
                        specified as working language.
                    </BodyLong>

                    <Heading size="xlarge" level="1" spacing>
                        Norwegian courses
                    </Heading>

                    <BodyLong>
                        Persons with granted collective protection may be entitled to free norwegian courses. Further
                        information about the Introduction Programme and your rights to attend free norwegian courses
                        are to be found at the official website of IMDi.
                    </BodyLong>
                    <BodyLong>
                        There are also possibilities to learn norwegian language skills while working through the
                        Flexible fast track.
                    </BodyLong>
                </article>
            </div>
        </Layout>
    );
}
