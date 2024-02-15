import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { NotFound } from "@navikt/arbeidsplassen-react";

export default function NotFoundPage() {
    return (
        <Layout>
            <Head>
                <title>Fant ikke siden - arbeidsplassen.no</title>
            </Head>
            <div className="container-small mt-12 mb-12">
                <NotFound />
            </div>
        </Layout>
    );
}
