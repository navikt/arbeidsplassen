import { BodyLong, Heading, BodyShort, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import TableOfContents from "@/src/common/components/TableOfContents";
import NextLink from "next/link";

export default function workInNorwayEn() {
    return (
        <Layout>
            <Head>
                <title>Information about working in Norway for Ukrainian refugees - arbeidsplassen.no</title>
            </Head>
            <div className="ukraine-page">
                <div className="green-box">
                    <div className="green-box-inner">
                        <Heading size="small" level="1" className="mb-0_25">
                            Finding a job
                        </Heading>
                        <BodyShort>Information about working in Norway for Ukrainian refugees</BodyShort>
                    </div>
                </div>
                <div className="flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page" lang="en">
                        <Heading id="when-can-i-start-looking" size="large" level="2" spacing>
                            When can I start looking for a job?
                        </Heading>
                        <BodyLong spacing>
                            You must have been granted{" "}
                            <DsLink href="https://udi.no/en/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/protection-asylum-in-norway/">
                                collective protection
                            </DsLink>{" "}
                            before you can start searching for and applying for jobs.
                        </BodyLong>
                        <BodyLong spacing>
                            You cannot apply for jobs or work while The Norwegian Directorate of Immigration (UDI)
                            processes your application.
                        </BodyLong>
                        <Heading size="small" level="3" spacing>
                            Relevant news and articles
                        </Heading>
                        <div className="arb-link-panel-grid mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.udi.no/en/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/frequently-asked-questions-and-answers/"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Questions and answers around collective protection
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.udi.no/en/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/protection-asylum-in-norway/"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Protection for those who have fled Ukraine
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.udi.no/en/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/frequently-asked-questions-and-answers/#link-30134"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Are you intending to work in Norway?
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="where-can-i-find" size="large" level="2" spacing>
                            Where can I find a job?
                        </Heading>
                        <BodyLong spacing>
                            You can look for a job at arbeidsplassen.no, one of the largest databases for job ads in
                            Norway. Here you can also find{" "}
                            <DsLink href="/stillinger?q=english">job advertisements in english.</DsLink>
                        </BodyLong>
                        <BodyLong spacing>
                            With{" "}
                            <NextLink href="/mot-bedrifter-pa-en-ny-mate" passHref legacyBehavior>
                                <DsLink>"Jobbtreff" (Norwegian language)</DsLink>
                            </NextLink>{" "}
                            at arbeidsplassen.no you can follow a live broadcast where companies present themselves and
                            the positions you can apply for. Jobbtreff is mainly held in Norwegian. Take a look at{" "}
                            <DsLink href="/jobbtreff">"Se kommende jobbtreff"</DsLink> if you can find someone in
                            english.
                        </BodyLong>
                        <Heading size="small" level="3" spacing>
                            Relevant news and articles
                        </Heading>
                        <div className="arb-link-panel-grid link-panel-stack mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Where to look for jobs (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="who-can-i-contact" size="large" level="2" spacing>
                            Who can I contact for assistance and guidance?
                        </Heading>
                        <BodyLong spacing>
                            If you need assistance finding a job, you can{" "}
                            <DsLink href="https://www.nav.no/kontaktoss/en">contact NAV</DsLink> for information and
                            guidance. If you are registered as a job seeker at NAV, NAV can help you to get in touch
                            with relevant employers and provide you with various measures in order to get a job. You can{" "}
                            <DsLink href="https://www.nav.no/arbeid/registrering">
                                register as a job seeker at nav.no (Norwegian language).
                            </DsLink>{" "}
                            If you need assistance you can contact your local NAV office.
                        </BodyLong>
                        <BodyLong spacing>You have the right to get an interpreter when contacting NAV.</BodyLong>
                        <BodyLong spacing>If you have questions, please call NAV at 55 55 33 33 </BodyLong>

                        <Heading size="small" level="3" spacing>
                            Relevant news and articles
                        </Heading>
                        <div className="arb-link-panel-grid link-panel-stack mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.nav.no/kontaktoss/en#find-nav-offices"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Find your local NAV office
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/cv">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    More information about searching for a job (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="where-can-i-work" size="large" level="2" spacing>
                            Where can I work without Norwegian language skills?
                        </Heading>
                        <BodyLong spacing>
                            Employers might set up language requirements through the job advertisement. If you can
                            communicate in basic english, you can look for{" "}
                            <DsLink href="/stillinger?q=english">job advertisement in english</DsLink> or where english
                            is specified as working language.
                        </BodyLong>

                        <Heading size="xsmall" level="3" spacing>
                            Norwegian courses
                        </Heading>
                        <BodyLong spacing>
                            Persons with granted collective protection may be entitled to free Norwegian courses.
                            Further{" "}
                            <DsLink href="https://www.imdi.no/globalassets/dokumenter/informasjon-om-introduksjonsprogram-og-sprakopplaring-for-personer-med-kollektiv-beskyttelse/informasjon-om-introduksjonsprogram-2022---engelsk.pdf">
                                information about the Introduction Programme
                            </DsLink>{" "}
                            and your rights to attend free Norwegian courses are to be found at the official website of
                            IMDi.
                        </BodyLong>
                        <BodyLong spacing>
                            There are also possibilities to learn Norwegian language skills while working through the
                            flexible fast track.
                        </BodyLong>

                        <Heading size="small" level="3" spacing>
                            Relevant news and articles
                        </Heading>
                        <div className="arb-link-panel-grid link-panel-stack mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.imdi.no/globalassets/dokumenter/informasjon-om-introduksjonsprogram-og-sprakopplaring-for-personer-med-kollektiv-beskyttelse/informasjon-om-introduksjonsprogram-2022---engelsk.pdf"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Information about the Introduction Programme and language instruction
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>
                    </article>
                </div>
            </div>
        </Layout>
    );
}
