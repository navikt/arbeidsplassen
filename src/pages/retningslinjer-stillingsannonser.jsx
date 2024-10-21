import RetningslinjerStillingsannonser from "@/src/modules/retningslinjer-stillingsannonser/RetningslinjerStillingsannonser";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Retningslinjer for innhold i annonser i Navs stillingsbase"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <RetningslinjerStillingsannonser />
        </Layout>
    );
}
