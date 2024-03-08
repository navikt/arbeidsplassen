import SporsmalOgSvar from "@/src/modules/sporsmal-og-svar/SporsmalOgSvar";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Spørsmål og svar"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SporsmalOgSvar />
        </Layout>
    );
}
