import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import React from "react";
import ImageLinkPanelArticle from "@/src/common/components/ImageLinkPanelArticle";

export default function MotBedrifterPaEnNyMate() {
    return (
        <Layout>
            <Head>
                <title>Jobbtreff – møt bedrifter på en ny måte - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Jobbtreff – møt bedrifter på en ny måte
                </Heading>

                <Ingress spacing>
                    Vil du bli kjent med en bedrift? Følg en direkte sending der bedriften forteller om seg selv og hva
                    slags stillinger du kan søke på.
                </Ingress>
            </div>

            <div className="container-medium mb-3">
                <img
                    className="article-image"
                    src="/images/jobbtreff.webp"
                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                    width="100%"
                />
            </div>

            <div className="container-small mb-4">
                <BodyLong spacing>
                    Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du som er jobbsøker bli kjent med en
                    bedrift som trenger folk. De forteller om hva slags kompetanse de trenger og om jobbmulighetene.
                </BodyLong>
                <BodyLong spacing>
                    Dersom det er noe du gjerne vil at bedriften skal snakke om, kan du sende inn forhåndsdefinerte
                    temaer før sendingen starter. Du kan også stille spørsmål underveis i sendingen.
                </BodyLong>
                <BodyLong className="mb-3">
                    Hvis du synes det bedriften forteller om er interessant, kan du ta kontakt med dem etter
                    jobbtreffet. De vil forklare hvordan du går fram.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Du er helt anonym
                </Heading>
                <BodyLong className="mb-3">
                    Det er helt uforpliktende og ufarlig å delta. Verken bedriften eller de andre deltakerne ser, hører
                    eller vet hvem som følger sendingen.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Slik følger du en sending
                </Heading>
                <BodyLong spacing>
                    Sendingen blir annonsert på arbeidsplassen.no. På forhånd kan du lese hva bedriften har tenkt å
                    fortelle om. Klikk på lenken for jobbtreffet når sendingen starter.
                </BodyLong>
                <BodyLong spacing>Du kan følge sendingen på telefon, PC eller Mac.</BodyLong>
                <BodyLong className="mb-3">Lykke til på jobbtreff!</BodyLong>

                <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/jobbtreff">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Finn kommende jobbtreff
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-6">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="article-link-panel-grid">
                    <ImageLinkPanelArticle
                        className="arb-primary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/students.jpg"
                        title="Tips til jobbsøknaden"
                        description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte akkurat deg."
                        href="/tips-til-jobbsoknaden"
                    />
                    <ImageLinkPanelArticle
                        className="arb-secondary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/paris.jpg"
                        title="Jobbe i utlandet"
                        description="Den Europeiske Jobbmobilitetsportslen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
                        href="/jobbe-i-utlandet"
                    />
                </div>
            </div>
        </Layout>
    );
}
