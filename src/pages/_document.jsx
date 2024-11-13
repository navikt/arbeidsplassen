import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="no">
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <body data-theme="arbeidsplassen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
