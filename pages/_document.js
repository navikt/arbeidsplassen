import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="nb">
            <Head>
                <title>arbeidsplassen.no</title>
                <link rel="icon" href="/public/favicon.png" />
            </Head>
            <body data-theme="arbeidsplassen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
