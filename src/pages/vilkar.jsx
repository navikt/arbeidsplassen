import Vilkar from "@/src/modules/vilkar/Vilkar";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Vilkår for å publisere stillinger"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Vilkar />
        </Layout>
    );
}
