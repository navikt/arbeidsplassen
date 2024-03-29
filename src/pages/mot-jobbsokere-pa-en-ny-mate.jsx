import MotJobbsokerePaEnNyMate from "@/src/modules/mot-jobbsokere-pa-en-ny-mate/MotJobbsokerePaEnNyMate";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

export const metadata = {
    title: getMetadataTitle("Jobbtreff – møt jobbsøkere på en ny måte"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <MotJobbsokerePaEnNyMate />
        </Layout>
    );
}
