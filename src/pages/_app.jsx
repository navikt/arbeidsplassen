/* eslint-disable react/prop-types */
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider, {
    AuthenticationContext,
    AuthenticationStatus,
} from "@/src/common/contexts/AuthenticationProvider";
import { setUpAmplitude, setAuthenticatedStatus } from "@/src/common/analysis/metrics";
import { useContext, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
function TrackedApp({ children }) {
    useEffect(() => {
        setUpAmplitude();
    }, []);

    const { authenticationStatus } = useContext(AuthenticationContext);
    useEffect(() => {
        setAuthenticatedStatus(authenticationStatus === AuthenticationStatus.IS_AUTHENTICATED);
    }, [authenticationStatus]);
}

function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <TrackedApp>
                <Component {...pageProps} />
            </TrackedApp>
        </AuthenticationProvider>
    );
}

export default App;
