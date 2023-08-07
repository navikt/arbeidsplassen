import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";
import NextLink from "next/link";

export default function FindingAJob() {
    const { t, i18n } = useTranslation(["finding-a-job", "working-in-norway"]);
    const { language: currentLanguage } = i18n;

    return (
        <Layout>
            <Head>
                <title>{t("ukrainian-work-in-norway-title", { ns: "working-in-norway" })} - arbeidsplassen.no</title>
            </Head>
            <div className="ukraine-page">
                <div className="green-box">
                    <div className="green-box-inner">
                        <Heading size="small" level="1" className="mb-0_25">
                            {t("finding-a-job-title", { ns: "working-in-norway" })}
                        </Heading>
                        <BodyShort>{t("ukrainian-work-in-norway-title", { ns: "working-in-norway" })}</BodyShort>
                    </div>
                </div>
                <div className="container-large flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page">
                        <Heading id="when-can-i-start-looking" size="large" level="2" spacing>
                            {t("h2-start-looking")}
                        </Heading>
                        <BodyLong spacing>
                            {t("p-start-looking.p1")}{" "}
                            <DsLink href={t("p-start-looking.p1-link")}>{t("p-start-looking.p1-link-text")}</DsLink>{" "}
                            {t("p-start-looking.p1-2")}
                        </BodyLong>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>
                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
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
                            {t("h2-find-job")}
                        </Heading>
                        <BodyLong spacing>
                            {t("p-find-job.p1")}{" "}
                            <DsLink hrefLang="no" href="/stillinger?q=english">
                                {t("p-find-job.p1-link-text")}
                            </DsLink>
                        </BodyLong>
                        <BodyLong spacing>
                            {t("p-find-job.p2")}{" "}
                            <NextLink
                                href="/mot-bedrifter-pa-en-ny-mate"
                                passHref
                                legacyBehavior
                                locale="no"
                                hrefLang="no"
                            >
                                <DsLink>{t("p-find-job.p2-link-text-1")}</DsLink>
                            </NextLink>{" "}
                            {t("p-find-job.p2-2")} <DsLink href="/jobbtreff">{t("p-find-job.p2-link-text-2")}</DsLink>{" "}
                            {t("p-find-job.p2-3")}
                        </BodyLong>
                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container link-panel-stack mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Where to look for jobs (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="who-can-i-contact" size="large" level="2" spacing>
                            {t("h2-assistance")}
                        </Heading>
                        <BodyLong spacing>
                            {t("p-assistance.p1")}{" "}
                            <DsLink hrefLang="en" href="https://www.nav.no/kontaktoss/en">
                                {t("p-assistance.p1-link-text-1")}
                            </DsLink>{" "}
                            {t("p-assistance.p1-2")}
                            <DsLink href="https://www.nav.no/arbeid/registrering" hrefLang="no">
                                {t("p-assistance.p1-link-text-2")}
                            </DsLink>{" "}
                            {t("p-assistance.p1-3")}
                        </BodyLong>
                        <DsLink href="https://vimeo.com/656108660" hrefLang="en" className="mb-2">
                            {t("p-assistance.p2-link-text-3")}
                        </DsLink>
                        <BodyLong spacing>{t("p-assistance.p2")}</BodyLong>
                        <BodyLong spacing>{t("p-assistance.p3")}</BodyLong>

                        {currentLanguage === "uk" ? (
                            <DsLink hreflang="uk" href="https://vimeo.com/696892548" className="mb-2">
                                Усний перекладач при контакті з NAV
                            </DsLink>
                        ) : null}

                        {currentLanguage === "ru" ? (
                            <DsLink
                                hreflang="ru"
                                href="https://vimeo.com/showcase/9089710/video/759018688"
                                className="mb-2"
                            >
                                Устный переводчик при контакте с NAV
                            </DsLink>
                        ) : null}

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container link-panel-stack mb-3">
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
                            {t("h2-working-wo-norwegian")}
                        </Heading>
                        <BodyLong spacing>
                            {t("p-working.p1")}{" "}
                            <DsLink href="/stillinger?q=english">{t("p-working.p-link-text")}</DsLink>{" "}
                            {t("p-working.p1-2")}
                        </BodyLong>

                        <Heading size="xsmall" level="3" spacing>
                            {t("h3-norwegain-courses")}
                        </Heading>
                        <BodyLong spacing>
                            {t("p-no-courses.p1")}{" "}
                            <DsLink href={t("p-no-courses.p1-link")}>{t("p-no-courses.p1-link-text")}</DsLink>{" "}
                            {t("p-no-courses.p1-2")}
                        </BodyLong>
                        <BodyLong spacing>{t("p-no-courses.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container link-panel-stack mb-3">
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

export async function getStaticProps(context) {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["finding-a-job", "working-in-norway"])),
        },
    };
}
