import React from "react";
import LysUtSommerjobber from "@/src/modules/lys-ut-sommerjobber/LysUtSommerjobber";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Lys ut sommerjobber"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <LysUtSommerjobber />
        </Layout>
    );
}
