import Arbeidsgivertjenester from "@/src/modules/arbeidsgivertjenester/Arbeidsgivertjenester";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Hvem kan bruke arbeidsgivertjenestene?"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Arbeidsgivertjenester />
        </Layout>
    );
}
