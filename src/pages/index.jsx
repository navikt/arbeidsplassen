import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import MainPage from "@/src/common/components/MainPage";

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>Arbeidsplassen - arbeidsplassen.no</title>
            </Head>
            <MainPage />
        </Layout>
    );
}
