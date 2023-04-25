import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function jobbeiUtlandet() {
    return (
        <Layout>
            <Head>
                <title>Jobbe i utlandet - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Jobbe i utlandet
                </Heading>

                <Ingress spacing>
                    Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i
                    EU-/EØS-området og Sveits.
                </Ingress>

                <div className="mb-3">
                    <img
                        className="article-image"
                        src="/images/eures.png"
                        alt="Bilde av en globus som viser Europa"
                        width="100%"
                    />
                </div>

                <Heading size="large" level="2" spacing>
                    Hva kan jeg gjøre på EURES-portalen?
                </Heading>
                <BodyLong spacing>
                    På portalen kan du søke etter ledige stillinger. Du kan også gjøre CV-en din tilgjengelig for
                    arbeidsgivere som søker nye medarbeidere.
                </BodyLong>
                <BodyLong className="mb-3">
                    Dersom du er statsborger i et EU/EØS-land eller Sveits kan du eksportere CV-en du har på
                    arbeidsplassen.no til EURES-portalen.
                </BodyLong>

                <LinkPanel
                    className="arb-secondary-bg-text arb-link-panel"
                    href="https://ec.europa.eu/eures/public/index_no"
                >
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Gå til EURES-portalen
                    </LinkPanel.Title>
                </LinkPanel>
            </article>
        </Layout>
    );
}
