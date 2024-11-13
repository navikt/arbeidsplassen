import SlikFungererSuperraskSoknad from "@/src/modules/slik-fungerer-superrask-soknad/SlikFungererSuperraskSoknad";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Superrask søknad"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SlikFungererSuperraskSoknad />
        </Layout>
    );
}
