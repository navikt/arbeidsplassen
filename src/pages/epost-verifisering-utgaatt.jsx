import EpostVerifiseringUtgaatt from "@/src/modules/epost-verifisering-utgaatt/EpostVerifiseringUtgaatt";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import { getMetadataTitle } from "@/src/modules/layout";

const metadata = {
    title: getMetadataTitle("Lenken er utgått"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <EpostVerifiseringUtgaatt />
        </Layout>
    );
}
