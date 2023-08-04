import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";

export default function ApplyingForJob() {
    const { t } = useTranslation(["applying-for-job", "working-in-norway"]);
    // const { language: currentLanguage } = i18n;

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
                <div className="flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page">
                        <Heading id="how-do-i-apply" size="large" level="2" spacing>
                            {t("h2-how-apply")}
                        </Heading>

                        <Heading size="small" level="3" spacing>
                            {t("h3-cv")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p1")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-cover-letter")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-ss")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="arb-link-panel-grid mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Fast application (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    How to write a good job application (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    How to write a good job application (Norwegian language)
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="how-to-recognize" size="large" level="2" spacing>
                            {t("h2-recognize-foreign-edu")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-reg-prof")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-rec-of-edu")} education
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>
                        <ul>
                            <li>
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd"
                                    hrefLang="en"
                                >
                                    higher edu
                                </DsLink>
                            </li>
                            {/* TODO: redo redo redo */}
                            <li>
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd"
                                    hrefLang="en"
                                >
                                    tert edu
                                </DsLink>
                            </li>
                        </ul>

                        <Heading size="small" level="3" spacing>
                            {t("h3-auto-rec")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="arb-link-panel-grid mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Regulated professions
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Automatic recognition
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    How to apply for recognition
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="register-cv" size="large" level="2" spacing>
                            {t("h2-register-cv")}
                        </Heading>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>
                        <BodyLong spacing>{t("p-start-looking.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="arb-link-panel-grid mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="TODO">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Registering your CV in multiple places
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
