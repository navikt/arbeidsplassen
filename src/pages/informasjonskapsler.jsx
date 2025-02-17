import React from "react";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import Informasjonskapsler from "../modules/informasjonskapsler/Informasjonskapsler";

export const metadata = {
    title: getMetadataTitle("Informasjonskapsler på arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Informasjonskapsler />
        </Layout>
    );
}
