import MainPageBedrift from "@/src/common/components/bedrift/MainPageBedrift";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function BedriftPage() {
    return (
        <Layout active="bedrift">
            <Head>
                <title>Bedrift - arbeidsplassen.no</title>
            </Head>
            <MainPageBedrift />
        </Layout>
    );
}
