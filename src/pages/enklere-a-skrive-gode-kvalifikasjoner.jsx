import React from "react";
import EnklereASkriveGodeKvalifikasjoner from "@/src/modules/enklere-a-skrive-gode-kvalifikasjoner/EnklereASkriveGodeKvalifikasjoner";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import { getMetadataTitle } from "@/src/modules/layout";

export const metadata = {
    title: getMetadataTitle(
        "Nå er det enklere enn noensinne å skrive gode kvalifikasjoner og overskrifter til din jobbannonse",
    ),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <EnklereASkriveGodeKvalifikasjoner />
        </Layout>
    );
}
