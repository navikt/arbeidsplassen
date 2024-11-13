import React from "react";
import SlikSkriverDuEnGodCv from "@/src/modules/slik-skriver-du-en-god-cv/SlikSkriverDuEnGodCv";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Slik skriver du en god CV"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SlikSkriverDuEnGodCv />
        </Layout>
    );
}
