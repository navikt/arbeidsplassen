import Home from "@/src/modules/(home)/Home";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Arbeidsplassen"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
                <meta name="google-site-verification" content="I1DCqGuh-OEl_WXTcLI7NaNdS4-MjGo9nS_g2OQoajo" />
            </Head>
            <Home />
        </Layout>
    );
}
