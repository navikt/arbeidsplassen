import RekruttereFlyktninger from "@/src/modules/rekruttere-flyktninger/RekruttereFlyktninger";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Ønsker du å rekruttere flyktninger?"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <RekruttereFlyktninger />
        </Layout>
    );
}
