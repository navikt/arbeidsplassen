import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="no">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </Head>
            <body data-theme="arbeidsplassen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
