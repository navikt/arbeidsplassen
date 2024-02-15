import React from "react";
import OverforingAvStillingsannonser from "@/src/modules/overforing-av-stillingsannonser/OverforingAvStillingsannonser";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Overføring av stillingsannonser til arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <OverforingAvStillingsannonser />
        </Layout>
    );
}
