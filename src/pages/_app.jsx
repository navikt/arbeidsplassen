/* eslint-disable react/prop-types */
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";
import setUpAmplitude from "@/src/common/analysis/metrics";
import { useEffect } from "react";

function App({ Component, pageProps }) {
    useEffect(() => {
        setUpAmplitude();
    }, []);

    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}

export default App;
