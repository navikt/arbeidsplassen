/* eslint-disable react/prop-types */
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";

function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}

export default App;
