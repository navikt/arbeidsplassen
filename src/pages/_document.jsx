import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="nb">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body data-theme="arbeidsplassen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
