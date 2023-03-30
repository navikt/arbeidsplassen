import { Footer, Header, SkipLink } from "@navikt/arbeidsplassen-react";

export default function LayoutPerson({ children }) {
    return (
        <>
            <SkipLink />
            <Header variant="all" active="person" authenticationStatus="not-authenticated" />
            <main className="content">{children}</main>
            <Footer />
        </>
    );
}
