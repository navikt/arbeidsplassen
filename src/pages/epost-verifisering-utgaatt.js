import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import {Heading, Ingress, Link} from "@navikt/ds-react";

export default function epostVerifiseringUtgaatt() {
    return (
        <Layout>
            <Head>
                <title>Feil, lenken er utgått - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <svg role="img" aria-label="Feil" className="mb-1" aria-labelledby="feil-title"
                     xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                    <title id="feil-title">Feil</title>
                    <path fill="#FF0000"
                          d="M11.999 0C5.39481 0 0.0125453 5.37183 2.35604e-05 11.976C-0.00623731 15.1816 1.2355 18.1972 3.49776 20.4689C5.76002 22.7395 8.7715 23.9937 11.9771 24H12C18.6032 24 23.9865 18.6271 24 12.0219C24.0125 5.40626 18.6397 0.0125217 11.999 0Z"/>
                    <path
                        d="M12 10.6512L15.3719 7.27934C15.7444 6.90689 16.3482 6.90689 16.7207 7.27934C17.0931 7.65179 17.0931 8.25565 16.7207 8.6281L13.3488 12L16.7207 15.3719C17.0931 15.7444 17.0931 16.3482 16.7207 16.7207C16.3482 17.0931 15.7444 17.0931 15.3719 16.7207L12 13.3488L8.6281 16.7207C8.25565 17.0931 7.65179 17.0931 7.27934 16.7207C6.90689 16.3482 6.90689 15.7444 7.27934 15.3719L10.6512 12L7.27934 8.6281C6.90689 8.25565 6.90689 7.65179 7.27934 7.27934C7.65179 6.90689 8.25565 6.90689 8.6281 7.27934L12 10.6512Z"
                        fill="white"/>
                </svg>
                <Heading spacing size="xlarge" level="1">Feil, lenken er utgått</Heading>
                <Ingress spacing>
                    Du kan bestille e-post med ny lenke under <Link href="/personinnstillinger">innstillinger</Link>
                </Ingress>
            </article>
        </Layout>
    )
}
