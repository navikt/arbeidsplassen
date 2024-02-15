import VilkarSuperraskSoknad from "@/src/modules/vilkar-superrask-soknad/VilkarSuperraskSoknad";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Vilkår for bruk av superrask søknad"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <VilkarSuperraskSoknad />
        </Layout>
    );
}
