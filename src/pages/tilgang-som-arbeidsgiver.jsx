import TilgangSomArbeidsgiver from "@/src/modules/tilgang-som-arbeidsgiver/TilgangSomArbeidsgiver";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Hvordan gi eller få tilgang som arbeidsgiver"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <TilgangSomArbeidsgiver />
        </Layout>
    );
}
