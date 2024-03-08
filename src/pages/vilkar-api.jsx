import VilkarApi from "@/src/modules/vilkar-api/VilkarApi";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Vilkår for bruk av API for stillingsannonser"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <VilkarApi />
        </Layout>
    );
}
