import PersonvernArbeidsgiver from "@/src/modules/personvern-arbeidsgiver/PersonvernArbeidsgiver";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Personvernerklæring for deg som representerer en arbeidsgiver"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <PersonvernArbeidsgiver />
        </Layout>
    );
}
