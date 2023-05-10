import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import ImageLinkPanelMedium from "@/src/common/components/ImageLinkPanelMedium";
import Image from "next/image";

export default function jobbeiUtlandet() {
    return (
        <Layout>
            <Head>
                <title>Jobbe i utlandet - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Jobbe i utlandet
                </Heading>

                <Ingress spacing>
                    Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i
                    EU-/EØS-området og Sveits.
                </Ingress>
            </div>

            <div className="container-medium mb-3">
                <Image className="article-image" src="/images/paris.jpg" alt="Bilde av Eiffeltårnet" width="100%" />
            </div>

            <div className="container-small mb-4">
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
                    className="arb-primary-bg-text arb-link-panel"
                    href="https://ec.europa.eu/eures/public/index_no"
                >
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Gå til EURES-portalen
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-6">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="image-link-panel-grid-medium">
                    <ImageLinkPanelMedium
                        image="/images/students.jpg"
                        alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                        title="Tips til jobbsøknaden"
                        description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte akkurat deg."
                        href="/tips-til-jobbsoknaden"
                        color="secondary"
                    />
                    <ImageLinkPanelMedium
                        image="/images/jobbsoker.jpg"
                        alt="En person som skriver på mobilen sin."
                        title="Nyhet! Superrask søknad"
                        description="En enklere måte å komme i kontakt med bedrifter."
                        href="/superrask-soknad-person"
                        color="tertiary"
                    />
                </div>
            </div>
        </Layout>
    );
}
