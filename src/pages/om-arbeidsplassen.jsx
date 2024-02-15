import OmArbeidsplassen from "@/src/modules/om-arbeidsplassen/OmArbeidsplassen";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Om arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <OmArbeidsplassen />
        </Layout>
    );
}
