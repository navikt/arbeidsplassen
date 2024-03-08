import Tilgjengelighet from "@/src/modules/tilgjengelighet/Tilgjengelighet";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Tilgjengelighet"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Tilgjengelighet />
        </Layout>
    );
}
