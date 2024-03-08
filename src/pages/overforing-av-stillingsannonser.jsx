import React from "react";
import OverforingAvStillingsannonser from "@/src/modules/overforing-av-stillingsannonser/OverforingAvStillingsannonser";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Overføring av stillingsannonser til arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <OverforingAvStillingsannonser />
        </Layout>
    );
}
