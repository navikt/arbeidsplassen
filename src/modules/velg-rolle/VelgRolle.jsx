import { Heading, LinkPanel, Stack } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function VelgRolle() {
    return (
        <Layout>
            <Head>
                <title>Logg inn - arbeidsplassen.no</title>
            </Head>
            <div className="container-medium page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" className="mb-8">
                    Er du jobbsøker eller arbeidsgiver?
                </Heading>
                <Stack direction={{ xs: "column", md: "row" }} gap="4">
                    <LinkPanel href="../oauth2/login?redirect=/min-side" className="arb-link-panel-secondary flex-1">
                        <LinkPanel.Title>Jeg er jobbsøker</LinkPanel.Title>
                        <LinkPanel.Description>Logg inn på min side</LinkPanel.Description>
                    </LinkPanel>

                    <LinkPanel
                        href="../oauth2/login?redirect=/stillingsregistrering"
                        className="arb-link-panel-secondary flex-1"
                    >
                        <LinkPanel.Title>Jeg er arbeidsgiver</LinkPanel.Title>
                        <LinkPanel.Description>Logg inn på min bedriftsside</LinkPanel.Description>
                    </LinkPanel>
                </Stack>
            </div>
        </Layout>
    );
}
