import MainPage from "@/src/common/components/MainPage";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export async function getStaticProps() {
    let positionCount;
    try {
        const response = await fetch("http://pam-search-api/ad/_search", {
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
