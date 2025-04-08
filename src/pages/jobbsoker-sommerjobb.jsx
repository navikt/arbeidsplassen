import React from "react";
import JobbsokerSommerjobb from "@/src/modules/jobbsoker-sommerjobb/JobbsokerSommerjobb";
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
            <JobbsokerSommerjobb />
        </Layout>
    );
}
