import { BodyLong, Heading } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import WavingGrape from "@/src/common/components/images/WavingGrape";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Fant ikke siden - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom text-center">
                <WavingGrape className="mb-2" />
                <Heading spacing size="large" level="1">
                    Du er nå logget ut
                </Heading>
                <BodyLong>Takk for denne gang.</BodyLong>
            </div>
        </Layout>
    );
}
