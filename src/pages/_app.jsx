/* eslint-disable react/prop-types */
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";
import setUpAmplitude from "@/src/common/analysis/metrics";
import { useEffect } from "react";

function App({ Component, pageProps }) {
    console.log("ampKey", process.env.NEXT_PUBLIC_AMPLITUDE_KEY);
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_AMPLITUDE_KEY) {
            setUpAmplitude(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);
        }
    }, []);

    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}

export default App;
