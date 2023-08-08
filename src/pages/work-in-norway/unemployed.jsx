import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";

export default function Unemployed() {
    const { t } = useTranslation(["unemployed", "work-in-norway"]);

    return (
        <Layout>
            <Head>
                <title>{t("unemployed-title", { ns: "work-in-norway" })} - arbeidsplassen.no</title>
            </Head>
            <div className="ukraine-page">
                <div className="green-box">
                    <div className="green-box-inner">
                        <Heading size="small" level="1" className="mb-0_25">
                            {t("unemployed-title", { ns: "work-in-norway" })}
                        </Heading>
                        <BodyShort>{t("ukrainian-work-in-norway-title", { ns: "work-in-norway" })}</BodyShort>
                    </div>
                </div>
                <div className="container-large flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page">
                        <Heading id="unemployed" size="large" level="2" spacing>
                            {t("h2-unemployed.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-unemployed.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-benefit.title")}
                        </Heading>
                        <BodyLong spacing>
                            {t("h3-benefit.p-1")}
                            <DsLink href="https://www.nav.no/arbeidsledig-permittert" hrefLang="no">
                                {t("h3-benefit.1-link-title")}
                            </DsLink>{" "}
                            {t("h3-benefit.p-2")}{" "}
                            <DsLink href="https://www.nav.no/arbeid/registrering" hrefLang="no">
                                {t("h3-benefit.2-link-title")}
                            </DsLink>{" "}
                            {t("h3-benefit.p-3")}
                        </BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-info.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-info.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "work-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="/stillinger?q=english"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits#chapter-1"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="support" size="large" level="2" spacing>
                            {t("h2-support.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-support.p1")}</BodyLong>
                        <BodyLong spacing>{t("h2-support.p2")}</BodyLong>
                        <BodyLong spacing>
                            {t("h2-support.p3")}
                            <DsLink href="https://www.nav.no/opplysning-rad-veiledning/en" hrefLang="en">
                                {t("h2-support.p3-link-title")}
                            </DsLink>
                        </BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "work-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href={t("2-link-panels.1-link")}>
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panels.2-title")}
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
            ...(await serverSideTranslations(locale, ["unemployed", "work-in-norway"])),
        },
    };
}
