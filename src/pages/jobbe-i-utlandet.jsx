import JobbeIUtlandet from "@/src/modules/jobbe-i-utlandet/JobbeIUtlandet";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Jobbe i utlandet"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <JobbeIUtlandet />
        </Layout>
    );
}
