import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";

export default function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}
