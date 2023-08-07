import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";

export default function ApplyingForJob() {
    const { t } = useTranslation(["applying-for-job", "working-in-norway"]);

    return (
        <Layout>
            <Head>
                <title>{t("ukrainian-work-in-norway-title", { ns: "working-in-norway" })} - arbeidsplassen.no</title>
            </Head>
            <div className="ukraine-page">
                <div className="green-box">
                    <div className="green-box-inner">
                        <Heading size="small" level="1" className="mb-0_25">
                            {t("applying-for-a-job-title", { ns: "working-in-norway" })}
                        </Heading>
                        <BodyShort>{t("ukrainian-work-in-norway-title", { ns: "working-in-norway" })}</BodyShort>
                    </div>
                </div>
                <div className="container-large flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page">
                        <Heading id="how-do-i-apply" size="large" level="2" spacing>
                            {t("h2-how-apply")}
                        </Heading>

                        <Heading size="small" level="3" spacing>
                            {t("h3-cv.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-cv.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-cover-letter.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-cover-letter.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-ss.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-ss.p1")}</BodyLong>
                        <BodyLong spacing>{t("h3-ss.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="/slik-skriver-du-en-god-cv"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="/superrask-soknad-person"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="/tips-til-jobbsoknaden"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.3-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="how-to-recognize" size="large" level="2" spacing>
                            {t("h2-recognize-foreign-edu.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-recognize-foreign-edu.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-reg-prof.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-reg-prof.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-rec-of-edu.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-rec-of-edu.p")}</BodyLong>
                        <ul>
                            <li className="mb-1">
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd"
                                    hrefLang="en"
                                >
                                    {t("h3-rec-of-edu.1-link-title")}
                                </DsLink>
                            </li>
                            <li>
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-tertiary-vocational-education"
                                    hrefLang="en"
                                >
                                    {t("h3-rec-of-edu.2-link-title")}
                                </DsLink>
                            </li>
                        </ul>

                        <Heading size="small" level="3" spacing>
                            {t("h3-auto-rec.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-auto-rec.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://hkdir.no/en/foreign-education/lists-and-databases/regulated-professions"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd/automatic-recognition-a-quicker-alternative"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO: Missing link">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panels.3-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="register-cv" size="large" level="2" spacing>
                            {t("h2-register-cv.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-register-cv.p1")}</BodyLong>
                        <BodyLong spacing>{t("h2-register-cv.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.nav.no/finn-jobbene#registrer-cv-en-flere-steder"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("3-link-panel-title")}
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
            ...(await serverSideTranslations(locale, ["applying-for-job", "working-in-norway"])),
        },
    };
}
