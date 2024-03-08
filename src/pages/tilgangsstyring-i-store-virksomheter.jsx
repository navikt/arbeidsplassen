import TilgangsstyringIStoreVirksomheter from "@/src/modules/tilgangsstyring-i-store-virksomheter/TilgangsstyringIStoreVirksomheter";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Tilgangsstyring i store virksomheter"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <TilgangsstyringIStoreVirksomheter />
        </Layout>
    );
}
