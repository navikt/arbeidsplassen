import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function tilgjengelighet() {
    return (
        <Layout>
            <Head>
                <title>Tilgjengelighet - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Tilgjengelighet
                </Heading>
                <BodyLong>
                    Arbeidsplassen.no er etter beste evne utviklet i tråd med forskrift om universell utforming av IKT.
                    Les vår{" "}
                    <Link href="https://uustatus.no/nb/erklaringer/publisert/9f7beaf9-ea64-4a93-8e20-8282f8fd1fce">
                        tilgjengelighetserklæring på uustatus.no
                    </Link>
                </BodyLong>
            </article>
        </Layout>
    );
}
