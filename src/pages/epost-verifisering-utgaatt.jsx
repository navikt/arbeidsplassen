import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { BodyLong, Button, Heading, VStack } from "@navikt/ds-react";
import { WorriedFigure } from "@navikt/arbeidsplassen-react";

export default function epostVerifiseringUtgaatt() {
    return (
        <Layout>
            <Head>
                <title>Lenken er utgått - arbeidsplassen.no</title>
            </Head>
            <article className="container-small mt-16 mb-16">
                <VStack align="center">
                    <WorriedFigure className="mb-8" />
                    <Heading spacing size="large" level="1" className="text-center">
                        Lenken er dessverre utgått
                    </Heading>
                    <BodyLong className="mb-8 text-center">
                        Du kan sende en ny bekreftelse inne i samtykken og innstillinger.
                    </BodyLong>
                    <Button variant="primary" as="a" href="/personinnstillinger">
                        Gå til samtykken og innstillinger
                    </Button>
                </VStack>
            </article>
        </Layout>
    );
}
