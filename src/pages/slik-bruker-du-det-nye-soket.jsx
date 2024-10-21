import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import NyttSok from "@/src/modules/nytt-sok/NyttSok";

export const metadata = {
    title: getMetadataTitle("Slik bruker du det nye søket"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <NyttSok />
        </Layout>
    );
}
