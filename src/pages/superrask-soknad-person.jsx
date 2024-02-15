import React from "react";
import SuperraskSoknadPerson from "@/src/modules/superrask-soknad-person/SuperraskSoknadPerson";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Superrask søknad"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SuperraskSoknadPerson />
        </Layout>
    );
}
