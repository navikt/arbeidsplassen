import Personvern from "@/src/modules/personvern/Personvern";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Personvernerklæring for arbeidsplassen.no"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Personvern />
        </Layout>
    );
}
