/* eslint-disable react/prop-types */
import "@navikt/ds-css/dist/global/tokens.css";
import "@navikt/ds-css/dist/global/reset.css";
import "@navikt/ds-css/dist/global/baseline.css";
import "@navikt/ds-css/dist/global/print.css";
import "@navikt/ds-css/dist/components.css";
import "@navikt/arbeidsplassen-css";
import "@navikt/arbeidsplassen-theme";
import "../common/styles/index.css";
import AuthenticationProvider, {
    AuthenticationContext,
    AuthenticationStatus,
} from "@/src/common/contexts/AuthenticationProvider";
import { setUpAmplitude, setAuthenticatedStatus } from "@/src/common/analysis/metrics";
import { useContext, useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import setSentryUserProperties from "@/src/common/analysis/sentry";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

function TrackedApp({ children }) {
    useEffect(() => {
        setUpAmplitude();
        setSentryUserProperties();
    }, []);

    const isAuthenticated =
        useContext(AuthenticationContext).authenticationStatus === AuthenticationStatus.IS_AUTHENTICATED;
    useEffect(() => {
        setAuthenticatedStatus(isAuthenticated);
    }, [isAuthenticated]);

    return children;
}

function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <TrackedApp>
                <div className={inter.className}>
                    <Component {...pageProps} />
                </div>
            </TrackedApp>
        </AuthenticationProvider>
    );
}

export default appWithTranslation(App);
