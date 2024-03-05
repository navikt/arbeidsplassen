import React from "react";
import ThonHotelSuperrask from "@/src/modules/thon-hotel-superrask/ThonHotelSuperrask";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";

const metadata = {
    title: getMetadataTitle("Ansatte sommervikarer med superrask søknad"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <ThonHotelSuperrask />
        </Layout>
    );
}
