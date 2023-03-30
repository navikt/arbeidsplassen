import { Footer, Header, SkipLink } from "@navikt/arbeidsplassen-react";

export default function LayoutBedrift({ children }) {
    return (
        <>
            <SkipLink />
            <Header variant="all" active="bedrift" authenticationStatus="not-authenticated" />
            <main className="content">{children}</main>
            <Footer />
        </>
    );
}
