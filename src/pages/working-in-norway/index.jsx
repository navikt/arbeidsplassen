import { BodyLong, Chips, Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export default function WorkInNorway() {
    const { t, i18n } = useTranslation("working-in-norway");
    const { language: currentLanguage } = i18n;

    const lngEnglish = "en";
    const lngUkrainian = "uk";
    const lngRussian = "ru";

    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

    const router = useRouter();

    const switchToLocale = useCallback(
        (locale) => {
            const path = router.asPath;
            return router.push(path, path, { locale });
        },
        [router],
    );

    const changeLanguage = useCallback(
        async (locale) => {
            setSelectedLanguage(locale);
            await switchToLocale(locale);
        },
        [switchToLocale],
    );

    return (
        <Layout>
            <Head>
                <title>{t("ukrainian-work-in-norway-title")} - arbeidsplassen.no</title>
            </Head>
            <article className="container-medium page-margin-top-and-bottom ukraine-page-main">
                <Heading size="xlarge" level="1" spacing>
                    {t("ukrainian-work-in-norway-title")}
                </Heading>

                <BodyLong spacing>{t("description")}</BodyLong>

                <Chips className="mb-3">
                    <Chips.Toggle
                        selected={selectedLanguage === lngEnglish}
                        key={lngEnglish}
                        onClick={() => changeLanguage(lngEnglish)}
                        lang={lngEnglish}
                    >
                        Information in English
                    </Chips.Toggle>
                    <Chips.Toggle
                        selected={selectedLanguage === lngUkrainian}
                        key={lngUkrainian}
                        onClick={() => changeLanguage(lngUkrainian)}
                        lang={lngUkrainian}
                    >
                        Інформація українською мовою
                    </Chips.Toggle>
                    <Chips.Toggle
                        selected={selectedLanguage === lngRussian}
                        key={lngRussian}
                        onClick={() => changeLanguage(lngRussian)}
                        lang={lngRussian}
                    >
                        Информация на русском языке
                    </Chips.Toggle>
                </Chips>

                <div className="arb-link-panel-grid mb-5">
                    <LinkPanel
                        className="arb-secondary-bg-text arb-link-panel"
                        href={`/${selectedLanguage}/working-in-norway/finding-a-job`}
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("finding-a-job-title")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("applying-for-a-job-title")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("starting-a-new-job-title")}
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            {t("unemployed-title")}
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
