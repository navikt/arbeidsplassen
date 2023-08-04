import { BodyLong, Chips, Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

export default function WorkInNorway() {
    const { t } = useTranslation("working-in-norway");

    const lngEnglish = "en";
    const lngUkrainian = "uk";
    const lngRussian = "ru";

    const [selectedLanguage, setSelectedLanguage] = useState(lngEnglish);

    return (
        <Layout>
            <Head>
                <title>{t("ukrainian-refugee-title")} - arbeidsplassen.no</title>
            </Head>
            <article className="container-medium page-margin-top-and-bottom ukraine-page-main">
                <Heading size="xlarge" level="1" spacing>
                    {t("ukrainian-refugee-title")}
                </Heading>

                <BodyLong spacing>{t("description")}</BodyLong>

                <Chips className="mb-3">
                    <Chips.Toggle
                        selected={selectedLanguage === lngEnglish}
                        key={lngEnglish}
                        onClick={() => {
                            setSelectedLanguage(lngEnglish);
                        }}
                        lang={lngEnglish}
                    >
                        Information in English
                    </Chips.Toggle>
                    <Chips.Toggle
                        selected={selectedLanguage === lngUkrainian}
                        key={lngUkrainian}
                        onClick={() => {
                            setSelectedLanguage(lngUkrainian);
                        }}
                        lang={lngUkrainian}
                    >
                        Інформація українською мовою
                    </Chips.Toggle>
                    <Chips.Toggle
                        selected={selectedLanguage === lngRussian}
                        key={lngRussian}
                        onClick={() => {
                            setSelectedLanguage(lngRussian);
                        }}
                        lang={lngRussian}
                    >
                        Информация на русском языке
                    </Chips.Toggle>
                </Chips>

                <div className="arb-link-panel-grid mb-5">
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("link-finding-a-job")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("link-applying-for-a-job")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("link-starting-a-new-job")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("link-unemployed")}
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticProps(context) {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["working-in-norway"])),
        },
    };
}
