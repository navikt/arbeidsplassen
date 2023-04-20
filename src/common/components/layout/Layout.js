import { Footer, Header, SkipLink } from "@navikt/arbeidsplassen-react";
import { useContext } from "react";
import { AuthenticationContext, AuthenticationStatus } from "@/src/common/contexts/AuthenticationProvider";

export default function Layout({ children, active }) {
    const { authenticationStatus, chooseRole, logout } = useContext(AuthenticationContext);

    let authStatus = "unknown";
    if (authenticationStatus === AuthenticationStatus.IS_AUTHENTICATED) {
        authStatus = "is-authenticated";
    } else if (authenticationStatus === AuthenticationStatus.NOT_AUTHENTICATED) {
        authStatus = "not-authenticated";
    }

    return (
        <>
            <div className="arb-push-footer-down">
                <SkipLink />
                <Header
                    variant="all"
                    active={active}
                    onLogin={chooseRole}
                    onLogout={logout}
                    authenticationStatus={authStatus}
                />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
}
