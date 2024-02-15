import VilkarStillingsannonser from "@/src/modules/vilkar-stillingsannonser/VilkarStillingsannonser";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Vilkår for å publisere stillingsannonser"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <VilkarStillingsannonser />
        </Layout>
    );
}
