import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import { Heading, Ingress, Link } from "@navikt/ds-react";

export default function verifisertEpost() {
    return (
        <Layout>
            <Head>
                <title>Din e-postadresse er bekreftet - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <svg
                    role="img"
                    aria-label="Suksess"
                    className="mb-4"
                    aria-labelledby="suksess-title"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                >
                    <title id="suksess-title">Suksess</title>
                    <path
                        fill="#40c1ac"
                        d="M12 0C5.383 0 0 5.384 0 12C0 18.616 5.383 24 12 24C18.616 24 24 18.616 24 12C24 5.384 18.616 0 12 0Z"
                    />
                    <path
                        d="M9.64005 14.4413L16.0999 8.60215C16.4922 8.24684 17.1089 8.2655 17.4765 8.64607C17.8443 9.02681 17.8233 9.62419 17.4303 9.98032L10.2807 16.4434C10.0987 16.6068 9.86133 16.6955 9.61764 16.6955C9.36165 16.6955 9.11557 16.5989 8.92865 16.4197L6.54601 14.112C6.16598 13.7439 6.16598 13.1463 6.54601 12.7783C6.92604 12.4102 7.543 12.4102 7.92303 12.7783L9.64005 14.4413Z"
                        fill="#ffffff"
                    />
                </svg>
                <Heading spacing size="xlarge" level="1">
                    Din e-postadresse er bekreftet
                </Heading>
                <Ingress spacing>
                    E-postadressen din er nå er bekreftet. <Link href="/">Gå til forsiden</Link>
                </Ingress>
            </article>
        </Layout>
    );
}
