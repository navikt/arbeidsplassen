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
    const consentValues = CookieBannerUtils.getConsentValues(req.headers?.cookies);
    const hasUserTakenCookieAction = CookieBannerUtils.getUserActionTakenValue(req.headers?.cookies);

    return {
        props: { consentValues, hasUserTakenCookieAction },
    };
}

function Page({ consentValues, hasUserTakenCookieAction }) {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Informasjonskapsler consentValues={consentValues} hasUserTakenCookieAction={hasUserTakenCookieAction} />
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
    hasUserTakenCookieAction: PropTypes.bool,
};

export default Page;
