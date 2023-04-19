import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getStaticProps() {
    let positionCount;
    const host = process.env.NODE_ENV === "development" ? "http://localhost:2000" : "http://pam-search-api";
    const response = await fetch(`${host}/ad/_search`, {
        method: "POST",
        body: JSON.stringify({
            query: {
                bool: {
                    filter: {
                        term: {
                            status: "ACTIVE",
                        },
                    },
                },
            },
            aggs: {
                positioncount: {
                    sum: {
                        field: "properties.positioncount",
                        missing: 1,
                    },
                },
            },
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log("data:", data);
    positionCount = data.aggregations.positioncount.value;

    return {
        props: {
            positionCount,
        },
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
