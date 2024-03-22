import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { getMetadataTitle } from "@/src/modules/layout";
import SporreundersokelseBedrift from "@/src/modules/sporreundersokelse-bedrift/SporreundersokelseBedrift";

const metadata = {
    title: getMetadataTitle("Spørreundersøkelse"),
};

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>{metadata.title}</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <SporreundersokelseBedrift />
        </Layout>
    );
}
