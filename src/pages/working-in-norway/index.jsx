import { BodyLong, Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function WorkInNorway() {
    const { t } = useTranslation("working-in-norway");

    return (
        <Layout>
            <Head>
                <title>{t("ukrainian-refugee-title")} - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom ukraine-page">
                <Heading size="xlarge" level="1" spacing>
                    {t("ukrainian-refugee-title")}
                </Heading>

                <BodyLong>{t("description")}</BodyLong>

                <ul className="mb-3">
                    <li>
                        <BodyLong lang="en">Information in English</BodyLong>
                    </li>
                    <li>
                        <BodyLong lang="uk">Інформація українською мовою</BodyLong>
                    </li>
                    <li>
                        <BodyLong lang="ru">Информация на русском языке</BodyLong>
                    </li>
                </ul>

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
