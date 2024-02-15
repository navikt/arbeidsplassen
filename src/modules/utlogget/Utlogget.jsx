import { BodyLong, Heading } from "@navikt/ds-react";
import { useRouter } from "next/router";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { WavingFigure } from "@navikt/arbeidsplassen-react";

export default function Utlogget() {
    const { query } = useRouter();
    const timeoutContent =
        query.timeout && query.timeout === "true" ? "Av sikkerhetsgrunner har du blitt automatisk logget ut. " : "";
    return (
        <Layout>
            <Head>
                <title>Utlogget - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom text-center">
                <WavingFigure className="mb-8" />
                <Heading spacing size="large" level="1">
                    Du er nå logget ut
                </Heading>
                <BodyLong>{`${timeoutContent}Takk for denne gang.`}</BodyLong>
            </div>
        </Layout>
    );
}
