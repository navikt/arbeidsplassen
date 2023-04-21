import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "../common/styles/index.css";
import AuthenticationProvider from "@/src/common/contexts/AuthenticationProvider";
import { initializeTokenX } from "@/src/middleware/tokenX";

function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
        </AuthenticationProvider>
    );
}

App.getServerSideProps = async ({ Component, ctx }) => {
    await initializeTokenX(ctx.req, ctx.res, () => {});

    // Call the getServerSideProps of the child component, if any
    const pageProps = Component.getServerSideProps
        ? await Component.getServerSideProps(ctx)
        : {};

    return { props: { pageProps } };
};

export default App;
