import React from "react";
import SommerjobbJobbsoker from "@/src/modules/sommerjobb-jobbsoker/SommerjobbJobbsoker";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Sommerjobben venter på deg!"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SommerjobbJobbsoker />
        </Layout>
    );
}
