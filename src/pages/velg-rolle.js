import { BodyLong, Heading, Link, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";

export default function velgRolle() {
    //console.log(`window.location: ${window.location.host}`)
    return (
        <Layout>
            <Head>
                <title>Logg inn - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Link href="/" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til forsiden
                    </Link>

                    <Heading size="xlarge" level="1" spacing>
                        Er du jobbsøker eller arbeidsgiver?
                    </Heading>

                    <LinkPanel href='../oauth2/login?redirect=/stillinger' className="arb-link-panel arb-tertiary-bg-text mb-1">
                        <LinkPanel.Title>Jeg er jobbsøker</LinkPanel.Title>
                        <LinkPanel.Description>Logg inn på Min side</LinkPanel.Description>
                    </LinkPanel>

                    <LinkPanel href='../oauth2/login?redirect=/minside' className="arb-link-panel arb-tertiary-bg-text mb-4">
                        <LinkPanel.Title>Jeg er arbeidsgiver</LinkPanel.Title>
                        <LinkPanel.Description>Logg inn på Min bedriftside</LinkPanel.Description>
                    </LinkPanel>
                </div>
            </div>
        </Layout>
    );
}
