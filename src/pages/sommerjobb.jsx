import React from "react";
import Sommerjobb from "@/src/modules/sommerjobb/Sommerjobb";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Lys ut sommerjobber"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Sommerjobb />
        </Layout>
    );
}
