import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";

export default function StartingANewJob() {
    const { t } = useTranslation(["starting-a-new-job", "working-in-norway"]);
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
                            {t("starting-a-new-job-title", { ns: "working-in-norway" })}
                        </Heading>
                        <BodyShort>{t("ukrainian-work-in-norway-title", { ns: "working-in-norway" })}</BodyShort>
                    </div>
                </div>
                <div className="container-large flex">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small page-margin-top-and-bottom ukraine-page">
                        <Heading id="start-working" size="large" level="2" spacing>
                            {t("h2-start-working")}
                        </Heading>

                        <Heading size="small" level="3" spacing>
                            {t("h3-bank-account.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-bank-account.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-tax.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-tax.p1")}</BodyLong>
                        <BodyLong spacing>{t("h3-tax.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-contract.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-contract.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.finansportalen.no/bank/dagligbank/"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.arbeidstilsynet.no/en/working-conditions/contract-of-employment/"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("1-link-panels.3-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="rights" size="large" level="2" spacing>
                            {t("h2-rights.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-rights.p1")}</BodyLong>
                        <BodyLong spacing>
                            {t("h2-rights.p2")}{" "}
                            <DsLink
                                href="https://www.arbeidstilsynet.no/en/working-conditions/pay-and-minimum-rates-of-pay/minimum-wage/"
                                hrefLang="en"
                            >
                                {t("h2-rights.p2-link-title")}
                            </DsLink>
                        </BodyLong>
                        <BodyLong spacing>{t("h2-rights.p3")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href={t("2-link-panel.link")}>
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("2-link-panel.title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="sick-leave" size="large" level="2" spacing>
                            {t("h2-sick-leave.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-sick-leave.p1")}</BodyLong>
                        <BodyLong spacing>{t("h2-sick-leave.p2")} </BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.nav.no/en/home/benefits-and-services/Sickness-benefit-for-employees"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("3-link-panel-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="establish-business" size="large" level="2" spacing>
                            {t("h2-establish-business.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-establish-business.p1")}</BodyLong>
                        <BodyLong spacing>
                            {" "}
                            <DsLink
                                href="https://www.altinn.no/en/start-and-run-business/planning-starting/"
                                hrefLang="en"
                            >
                                {" "}
                                {t("h2-establish-business.p2-link-title")}
                            </DsLink>{" "}
                            {t("h2-establish-business.p2")}
                        </BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="https://www.altinn.no/en/start-and-run-business/planning-starting/before-start-up/startup-tutorial-for-sole-proprietorships/"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("4-link-panel-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="work-intro-prog" size="large" level="2" spacing>
                            {t("h2-work-intro-prog.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-work-intro-prog.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "working-in-norway" })}
                        </Heading>
                        <div className="ukraine-link-panel-container mb-3">
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href={t("5-link-panel.link")}>
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    {t("5-link-panel.title")}
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
            ...(await serverSideTranslations(locale, ["starting-a-new-job", "working-in-norway"])),
        },
    };
}
