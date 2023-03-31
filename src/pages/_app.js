import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/global.css";
import "../common/styles/article.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";

export default function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}
