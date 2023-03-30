import { Footer, Header, SkipLink } from "@navikt/arbeidsplassen-react";

export default function LayoutArticles({ children }) {
    return (
        <>
            <SkipLink />
            <Header variant="all" authenticationStatus="not-authenticated" />
            <main className="content">{children}</main>
            <Footer />
        </>
    );
}
