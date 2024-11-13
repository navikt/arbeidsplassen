import React from "react";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import NyttSokefelt from "@/src/modules/nytt-sokefelt/NyttSokefelt";

export const metadata = {
    title: getMetadataTitle("Nytt søkefelt! Enklere, raskere og mer fleksibelt!"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <NyttSokefelt />
        </Layout>
    );
}
