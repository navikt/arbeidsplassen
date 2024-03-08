import VerifisertEpost from "@/src/modules/verifisert-e-post/VerifisertEpost";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("E-postadressen din er bekreftet"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <VerifisertEpost />
        </Layout>
    );
}
