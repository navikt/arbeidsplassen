import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import NyeFiltre from "@/src/modules/nye-filtre/NyeFiltre";

export const metadata = {
    title: getMetadataTitle("Nye filtre gjør det enda enklere å finne jobber som passer"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <NyeFiltre />
        </Layout>
    );
}
