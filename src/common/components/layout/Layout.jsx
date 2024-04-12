/* eslint-disable react/prop-types */
import { Footer, Header, SkipLink } from "@navikt/arbeidsplassen-react";
import { useContext } from "react";
import { AuthenticationContext, AuthenticationStatus } from "@/src/common/contexts/AuthenticationProvider";
import { useRouter } from "next/router";

const COMPANY_PATHS = [
    "/arbeidsgivertjenester",
    "/bedrift",
    "/enklere-a-skrive-gode-kvalifikasjoner",
    "/hvordan-fa-tilgang",
    "/introduksjon-til-ny-side-for-annonser",
    "/jobbtreff/bedrift",
    "/mot-jobbsokere-pa-en-ny-mate",
    "/nyttige-artikler-for-bedrifter",
    "/overforing-av-stillingsannonser",
    "/personvern-arbeidsgiver",
    "/rekruttere-flyktninger",
    "/retningslinjer-jobbtreff",
    "/retningslinjer-stillingsannonser",
    "/skikkelig-bra-stillingsannonse",
    "/slik-fungerer-superrask-soknad",
    "/sommerjobb",
    "/superrask-soknad-bedrift",
    "/thon-hotel-superrask",
    "/tilgang-som-arbeidsgiver",
    "/tilgangsstyring-i-store-virksomheter",
    "/vilkar",
    "/vilkar-api",
    "/vilkar-og-retningslinjer",
    "/vilkar-stillingsannonser",
    "/vilkar-superrask-soknad",
];

export default function Layout({ children, variant }) {
    const { authenticationStatus, chooseRole, logout } = useContext(AuthenticationContext);
    const { pathname } = useRouter();

    let authStatus = "unknown";
    if (authenticationStatus === AuthenticationStatus.IS_AUTHENTICATED) {
        authStatus = "is-authenticated";
    } else if (authenticationStatus === AuthenticationStatus.NOT_AUTHENTICATED) {
        authStatus = "not-authenticated";
    }

    const headerVariant = variant || COMPANY_PATHS.includes(pathname) ? "company" : "person";
    return (
        <>
            <div className="arb-push-footer-down">
                <SkipLink href="#main-content" />
                <Header
                    variant={headerVariant}
                    onLogin={chooseRole}
                    onLogout={logout}
                    authenticationStatus={authStatus}
                />
                <main id="main-content">{children}</main>
            </div>
            <Footer />
        </>
    );
}
