import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getServerSideProps(context) {
    try {
        const response = await fetch("https://arbeidsplassen.nav.no/stillinger/api/search?from=0&size=1");
        const data = await response.json();
        const positionCount = data.aggregations.positioncount.sum.value;

        return {
            props: {
                positionCount: positionCount,
            },
        };
    } catch (err) {
        return { props: {} };
    }
}

export default function Page({ positionCount }) {
    return (
        <Layout active="person">
            <Head>
                <title>Arbeidsplassen - arbeidsplassen.no</title>
            </Head>
            <MainPage positionCount={positionCount} />
        </Layout>
    );
}
