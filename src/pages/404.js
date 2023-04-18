import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import ConfusedGrape from "@/src/common/illustrations/ConfusedGrape";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Fant ikke siden - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom text-center">
                <div className="article mt-4 mb-4">
                    <ConfusedGrape className="mb-2" ariaHidden />
                    <Heading spacing size="large" level="1">
                        Fant ikke siden
                    </Heading>
                    <BodyLong>
                        Nettsiden kan være slettet eller flyttet, eller det var en feil i lenken som førte deg hit.
                    </BodyLong>
                </div>
            </div>
        </Layout>
    );
}
