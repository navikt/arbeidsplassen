import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, BodyShort, Heading, LinkPanel, Link as DsLink } from "@navikt/ds-react";
import TableOfContents from "@/src/common/components/TableOfContents";

export default function ApplyingForJob() {
    const { t } = useTranslation(["applying-for-job", "work-in-norway"]);

    return (
        <Layout>
            <Head>
                <title>{t("applying-for-a-job-title", { ns: "work-in-norway" })} - arbeidsplassen.no</title>
            </Head>
            <div className="ukraine-page">
                <div className="green-box container-large">
                    <div className="green-box-inner">
                        <Heading size="small" level="1" className="mb-0_25">
                            {t("applying-for-a-job-title", { ns: "work-in-norway" })}
                        </Heading>
                        <BodyShort>{t("ukrainian-work-in-norway-title", { ns: "work-in-norway" })}</BodyShort>
                    </div>
                </div>
                <div className="container-large ukraine-page-main-container">
                    <TableOfContents selectorPrefix="main" />
                    <article className="container-small">
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
                            {t("h3-ss.title")} (superrask søknad)
                        </Heading>
                        <BodyLong spacing>{t("h3-ss.p1")}</BodyLong>
                        <BodyLong spacing>{t("h3-ss.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "work-in-norway" })}
                        </Heading>
                        <div className="article-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="/slik-skriver-du-en-god-cv"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("1-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="/superrask-soknad-person"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("1-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel className="arb-link-panel-tertiary" href="/tips-til-jobbsoknaden" hrefLang="no">
                                <LinkPanel.Title className="navds-heading--small">
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
                        <BodyLong spacing>
                            {t("h3-reg-prof.p-1")}{" "}
                            <DsLink
                                href="https://hkdir.no/en/foreign-education/lists-and-databases/regulated-professions"
                                hrefLang="en"
                            >
                                {t("h3-reg-prof.p-link-text")}
                            </DsLink>{" "}
                            {t("h3-reg-prof.p-2")}
                        </BodyLong>
                        <DsLink href={t("h3-reg-prof.link")} className="mb-2">
                            {t("h3-reg-prof.link-text")}
                        </DsLink>

                        <Heading size="small" level="3" spacing>
                            {t("h3-rec-of-edu.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-rec-of-edu.p")}</BodyLong>
                        <ul className="foreign-edu-list">
                            <li className="mb-1">
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd"
                                    hrefLang="en"
                                >
                                    {t("h3-rec-of-edu.1-link-title")}
                                </DsLink>
                            </li>
                            <li className="mb-1">
                                <DsLink
                                    href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-tertiary-vocational-education"
                                    hrefLang="en"
                                >
                                    {t("h3-rec-of-edu.2-link-title")}
                                </DsLink>
                            </li>
                            <li className="mb-1">
                                <DsLink href={t("h3-rec-of-edu.3-link")}>{t("h3-rec-of-edu.3-link-title")}</DsLink>
                            </li>
                            <li>
                                <DsLink href={t("h3-rec-of-edu.4-link")}>{t("h3-rec-of-edu.4-link-title")}</DsLink>
                            </li>
                        </ul>

                        <Heading size="small" level="3" spacing>
                            {t("h3-auto-rec.title")}
                        </Heading>
                        <BodyLong spacing>{t("h3-auto-rec.p")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "work-in-norway" })}
                        </Heading>
                        <div className="article-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="https://hkdir.no/en/foreign-education/lists-and-databases/regulated-professions"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("2-link-panels.1-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd/automatic-recognition-a-quicker-alternative"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("2-link-panels.2-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd/how-to-apply-foreign-higher-education"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("2-link-panels.3-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-tertiary-vocational-education/how-to-apply-tertiary-vocational-education"
                                hrefLang="en"
                            >
                                <LinkPanel.Title className="navds-heading--small">
                                    {t("2-link-panels.4-title")}
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>

                        <Heading id="register-cv" size="large" level="2" spacing>
                            {t("h2-register-cv.title")}
                        </Heading>
                        <BodyLong spacing>{t("h2-register-cv.p1")}</BodyLong>
                        <BodyLong spacing>{t("h2-register-cv.p2")}</BodyLong>

                        <Heading size="small" level="3" spacing>
                            {t("h3-news-articles", { ns: "work-in-norway" })}
                        </Heading>
                        <div className="article-link-panel-container mb-3">
                            <LinkPanel
                                className="arb-link-panel-tertiary"
                                href="https://www.nav.no/finn-jobbene#registrer-cv-en-flere-steder"
                                hrefLang="no"
                            >
                                <LinkPanel.Title className="navds-heading--small">
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
            ...(await serverSideTranslations(locale, ["applying-for-job", "work-in-norway"])),
        },
    };
}
