import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/global.css";
import "../common/styles/spacing.css";
import "../common/styles/typography.css";
import "../common/styles/article.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";
import {initializeTokenX} from "@/src/middleware/tokenX";

export default function App({ Component, pageProps }) {
    initializeTokenX();
    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}
