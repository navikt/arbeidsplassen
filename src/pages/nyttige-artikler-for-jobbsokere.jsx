import NyttigeArtiklerForJobbsokere from "@/src/modules/nyttige-artikler-for-jobbsokere/NyttigeArtiklerForJobbsokere";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Nyttige artikler for jobbsøkere"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <NyttigeArtiklerForJobbsokere />
        </Layout>
    );
}
