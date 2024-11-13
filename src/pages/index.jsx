import Home from "@/src/modules/(home)/Home";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: "Arbeidsplassen.no - alt av arbeid, samlet på én plass",
    description:
        "Finn din neste jobb i en av Norges største samlinger av stillinger. Her finner du jobber fra alle bransjer i markedet.",
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="google-site-verification" content="I1DCqGuh-OEl_WXTcLI7NaNdS4-MjGo9nS_g2OQoajo" />
            </Head>
            <Home />
        </Layout>
    );
}
