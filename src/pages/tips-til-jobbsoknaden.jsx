import React from "react";
import TipsTilJobbsoknaden from "@/src/modules/tips-til-jobbsoknaden/TipsTilJobbsoknaden";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Tips til jobbsøknaden"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <TipsTilJobbsoknaden />
        </Layout>
    );
}
