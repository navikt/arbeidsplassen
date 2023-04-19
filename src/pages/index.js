import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getStaticProps() {
    let positionCount;
    try {
        const response = await fetch("http://localhost:9000/ad/_search", {
            method: "POST",
            body: JSON.stringify({
                aggs: {
                    positioncount: {
                        filter: {
                            bool: {
                                filter: {
                                    term: {
                                        status: "ACTIVE",
                                    },
                                },
                            },
                        },
                        aggs: {
                            sum: {
                                sum: {
                                    field: "properties.positioncount",
                                    missing: 1,
                                },
                            },
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
        positionCount = data.aggregations.positioncount.sum.value;
    } catch (err) {
        positionCount = null;
    }

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
