import { Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function velgRolle() {
    return (
        <Layout>
            <Head>
                <title>Logg inn - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Er du jobbsøker eller arbeidsgiver?
                </Heading>

                <LinkPanel href="/todo" className="arb-link-panel arb-tertiary-bg-text mb-1">
                    <LinkPanel.Title>Jeg er jobbsøker</LinkPanel.Title>
                    <LinkPanel.Description>Logg inn på Min side</LinkPanel.Description>
                </LinkPanel>

                <LinkPanel href="/todo" className="arb-link-panel arb-tertiary-bg-text mb-4">
                    <LinkPanel.Title>Jeg er arbeidsgiver</LinkPanel.Title>
                    <LinkPanel.Description>Logg inn på Min bedriftside</LinkPanel.Description>
                </LinkPanel>
            </div>
        </Layout>
    );
}
