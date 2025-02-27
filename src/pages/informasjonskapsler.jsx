import React from "react";
import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import { CookieBannerUtils } from "@navikt/arbeidsplassen-react";
import PropTypes from "prop-types";
import Informasjonskapsler from "../modules/informasjonskapsler/Informasjonskapsler";

export const metadata = {
    title: getMetadataTitle("Informasjonskapsler på arbeidsplassen.no"),
};

export async function getServerSideProps({ req }) {
    const consentValues = CookieBannerUtils.getConsentValues(req.headers?.cookie);
    const userActionTaken = CookieBannerUtils.getUserActionTakenValue(req.headers?.cookie);

    console.log("USER ACTION TAKEN", userActionTaken);

    return {
        props: { consentValues, userActionTaken },
    };
}

function Page({ consentValues, userActionTaken }) {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Informasjonskapsler consentValues={consentValues} userActionTaken={userActionTaken} />
        </Layout>
    );
}

Page.propTypes = {
    consentValues: PropTypes.shape({
        consent: PropTypes.shape({
            analytics: PropTypes.bool,
            surveys: PropTypes.bool,
        }),
    }),
    userActionTaken: PropTypes.bool,
};

export default Page;
