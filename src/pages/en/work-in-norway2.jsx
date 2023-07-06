import { BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";
import { LinkPanel } from "@navikt/ds-react";

export default function workInNorwayEn() {
    return (
        <Layout>
            <Head>
                <title>Information about working in Norway for Ukrainian refugees - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom ukraine-page" lang="en">
                <Heading size="xlarge" level="1" spacing>
                    Information about working in Norway for Ukrainian refugees
                </Heading>

                <BodyLong lang="uk">
                    Here you will find information about finding a job in Norway, registering yourself as unemployed,
                    and your rights and obligation as an employee.
                </BodyLong>

                <ul className="mb-3">
                    <li>
                        <BodyLong>Information in English</BodyLong>
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
                            Finding a job
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Applying for a job
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Starting a new job
                        </LinkPanel.Title>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Unemployed
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </article>
        </Layout>
    );
}
