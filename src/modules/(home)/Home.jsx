import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import MainPage from "@/src/common/components/MainPage";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Arbeidsplassen - arbeidsplassen.no</title>
                <meta name="google-site-verification" content="I1DCqGuh-OEl_WXTcLI7NaNdS4-MjGo9nS_g2OQoajo" />
            </Head>
            <MainPage />
        </Layout>
    );
}
