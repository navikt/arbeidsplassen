import PersonvernUnderOppfolging from "@/src/modules/personvern-under-oppfolging/PersonvernUnderOppfolging";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Personvernerklæring for deg som er under arbeidsrettet oppfølging fra Nav"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <PersonvernUnderOppfolging />
        </Layout>
    );
}
