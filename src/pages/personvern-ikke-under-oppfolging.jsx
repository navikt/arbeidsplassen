import PersonvernIkkeUnderOppfolging from "@/src/modules/personvern-ikke-under-oppfolging/PersonvernIkkeUnderOppfolging";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Personvernerklæring for deg som ikke er under arbeidsrettet oppfølging fra NAV"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <PersonvernIkkeUnderOppfolging />
        </Layout>
    );
}
