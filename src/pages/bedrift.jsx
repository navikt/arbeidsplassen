import MainPageBedrift from "@/src/common/components/bedrift/MainPageBedrift";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function Bedrift() {
    return (
        <Layout variant="company">
            <Head>
                <title>Bedrift - arbeidsplassen.no</title>
            </Head>
            <MainPageBedrift />
        </Layout>
    );
}
