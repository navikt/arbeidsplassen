/* eslint-disable react/prop-types */
import "@navikt/ds-css/dist/global/tokens.css";
import "@navikt/ds-css/dist/global/reset.css";
import "@navikt/ds-css/dist/global/baseline.css";
import "@navikt/ds-css/dist/global/print.css";
import "@navikt/ds-css/dist/components.css";
import "@navikt/arbeidsplassen-css";
import "@navikt/arbeidsplassen-theme";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";
import { CookieBannerProvider } from "@/src/common/contexts/CookieBannerContext";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import setSentryUserProperties from "@/src/common/analysis/sentry";
import interLocalFont from "next/font/local";
import Axe from "@/src/common/analysis/Axe";
import Umami from "@/src/common/analysis/Umami";

const myFont = interLocalFont({
    variable: "--font-inter",
    src: "../../public/fonts/InterVariable.ttf",
    weight: "100 900",
    subsets: ["latin"],
    display: "swap",
});

function TrackedApp({ children }) {
    useEffect(() => {
        setSentryUserProperties();
    }, []);

    return children;
}

function App({ Component, pageProps }) {
    return (
        <div className={`${myFont.className} height-100`}>
            <Axe />
            <CookieBannerProvider>
                <AuthenticationProvider>
                    <TrackedApp>
                        <Component {...pageProps} />
                    </TrackedApp>
                </AuthenticationProvider>
                <Umami />
            </CookieBannerProvider>
        </div>
    );
}

export default appWithTranslation(App);
