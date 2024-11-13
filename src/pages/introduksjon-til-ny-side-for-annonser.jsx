import IntroduksjonTilNySideForAnnonser from "@/src/modules/introduksjon-til-ny-side-for-annonser/IntroduksjonTilNySideForAnnonser";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Introduksjon til ny side for annonser"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <IntroduksjonTilNySideForAnnonser />
        </Layout>
    );
}
