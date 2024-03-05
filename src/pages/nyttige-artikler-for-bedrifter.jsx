import NyttigeArtiklerForBedrifter from "@/src/modules/nyttige-artikler-for-bedrifter/NyttigeArtiklerForBedrifter";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Nyttige artikler for bedrifter"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <NyttigeArtiklerForBedrifter />
        </Layout>
    );
}
