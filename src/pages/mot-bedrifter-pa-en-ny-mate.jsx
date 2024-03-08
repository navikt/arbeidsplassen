import React from "react";
import MotBedrifterPaEnNyMate from "@/src/modules/mot-bedrifter-pa-en-ny-mate/MotBedrifterPaEnNyMate";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Jobbtreff – møt bedrifter på en ny måte"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <MotBedrifterPaEnNyMate />
        </Layout>
    );
}
