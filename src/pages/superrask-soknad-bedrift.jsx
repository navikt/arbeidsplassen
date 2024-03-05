import React from "react";
import SuperraskSoknadBedrift from "@/src/modules/superrask-soknad-bedrift/SuperraskSoknadBedrift";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Superrask søknad – en enklere måte å komme i kontakt med relevante jobbsøkere"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SuperraskSoknadBedrift />
        </Layout>
    );
}
