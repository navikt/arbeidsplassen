import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getStaticProps() {
    let positionCount;
    try {
        const response = await fetch("http://pam-search-api/stillingsok/ad/_search?from=0&size=1");
        const data = await response.json();
        positionCount = data.aggregations.positioncount.sum.value;
    } catch (err) {
        positionCount = null;
    }

    return {
        props: {
            positionCount,
        },
        revalidate: 60, // In seconds
    };
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
