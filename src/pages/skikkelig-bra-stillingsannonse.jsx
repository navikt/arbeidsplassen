import React from "react";
import SkikkeligBraStillingsannonse from "@/src/modules/skikkelig-bra-stillingsannonse/SkikkeligBraStillingsannonse";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Hvordan skriver du en skikkelig bra stillingsannonse?"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SkikkeligBraStillingsannonse />
        </Layout>
    );
}
