import VilkarOgRetningslinjer from "@/src/modules/vilkar-og-retningslinjer/VilkarOgRetningslinjer";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Vilkår for å bruke arbeidsgivertjenestene"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <VilkarOgRetningslinjer />
        </Layout>
    );
}
