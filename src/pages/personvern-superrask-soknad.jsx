import PersonvernSuperraskSoknad from "@/src/modules/personvern-superrask-soknad/PersonvernSuperraskSoknad";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Personvernerklæring for superrask søknad"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <PersonvernSuperraskSoknad />
        </Layout>
    );
}
