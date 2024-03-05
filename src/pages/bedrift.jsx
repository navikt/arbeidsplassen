import Bedrift from "@/src/modules/bedrift/Bedrift";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import { getMetadataTitle } from "@/src/modules/layout";

const metadata = {
    title: getMetadataTitle("Bedrift"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Bedrift />
        </Layout>
    );
}
