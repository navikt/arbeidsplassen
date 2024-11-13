import React from "react";
import HvordanFaTilgang from "@/src/modules/hvordan-fa-tilgang/HvordanFaTilgang";
import Head from "next/head";
import { getMetadataTitle } from "@/src/modules/layout";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Slik kan du skaffe deg tilgang"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <HvordanFaTilgang />
        </Layout>
    );
}
