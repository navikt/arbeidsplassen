import RetningslinjerJobbtreff from "@/src/modules/retningslinjer-jobbtreff/RetningslinjerJobbtreff";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Retningslinjer for innhold i jobbtreff på arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <RetningslinjerJobbtreff />
        </Layout>
    );
}
