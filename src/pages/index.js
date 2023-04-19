import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getStaticProps() {
    let positionCount;
    let resp;
    let code;
    let error = null;
    try {
        const response = await fetch("http://pam-search-api/stillingsok/ad/_search?from=0&size=1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        resp = JSON.stringify(data);
        code = response.status || response.statusCode;
        const data = await response.json();
        positionCount = data.aggregations.positioncount.sum.value;
    } catch (err) {
        error = JSON.stringify(err);
        positionCount = null;
        resp = null;
        code = null;
    }

    return {
        props: {
            positionCount,
            resp,
            code,
            error,
        },
        revalidate: 60, // In seconds
    };
}

export default function Page({ positionCount, code, resp, error }) {
    return (
        <Layout active="person">
            <Head>
                <title>Arbeidsplassen - arbeidsplassen.no</title>
            </Head>
            <MainPage positionCount={positionCount} />
            <p>{code}</p>
            <p>{resp}</p>
            <p>{error}</p>
        </Layout>
    );
}
