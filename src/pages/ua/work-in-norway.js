import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { useEffect } from "react";
import Layout from "@/src/common/components/layout/Layout";

export default function workInNorwayUa() {
    useEffect(() => {
        document.documentElement.lang = "ua";
    });
    return (
        <Layout>
            <div className="page-margin-top-and-bottom">
                <div className="article"></div>
            </div>
        </Layout>
    );
}
