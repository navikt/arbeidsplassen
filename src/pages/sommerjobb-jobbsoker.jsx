import { BodyLong, Heading, Ingress, Link as DsLink, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import ImageLinkPanelMedium from "@/src/common/components/ImageLinkPanelMedium";
import React from "react";

export default function SommerjobbJobbsoker() {
    return (
        <Layout>
            <Head>
                <title>På utkikk etter sommerjobb? - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    På utkikk etter sommerjobb?
                </Heading>

                <Ingress>Vi har gjort det ekstra enkelt for deg å finne sommerjobber i hele landet.</Ingress>
            </div>

            <div className="container-medium mb-3">
                <img
                    className="article-image article-image-pos"
                    src="/images/sommerjobb-jobbsoker.jpg"
                    alt="En kunde får servert en burger fra en food truck"
                    width="100%"
                />
            </div>

            <div className="container-small mb-4">
                <BodyLong spacing>
                    Arbeidsgivere registrerer daglig ledige stillinger på arbeidsplassen.no. I tillegg henter vi
                    automatisk inn stillinger fra mange nettsteder, og vi gir deg en samlet oversikt over det vi finner.
                    Enkelt og greit!
                </BodyLong>
                <BodyLong className="mb-3">
                    <DsLink href="/stillinger?q=sommerjobb">Her finner du sommerjobber</DsLink>
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Tips til deg som vil søke på sommerjobber
                </Heading>
                <Heading size="medium" level="3" spacing>
                    Hvordan skille seg ut?
                </Heading>
                <BodyLong spacing>
                    Vær positiv og få frem det du kan. Tenk over hva du kan utenom utdanning. Kanskje du har vært
                    hjelpetrener på fotballaget, sittet i elevrådet eller hatt småjobber i arbeidsuken? Har du hobbyer?
                    Kanskje det har gitt deg kunnskap og ferdigheter som arbeidsgiver ser etter?
                </BodyLong>

                <Heading size="medium" level="3" spacing>
                    Superrask søknad
                </Heading>
                <BodyLong spacing>
                    På arbeidsplassen.no finner du enkelte sommerjobber som har superrask søknad. Der kan du legge inn
                    en kort beskrivelse av deg selv. Du trenger ingen CV. Husk at du konkurrerer med andre om jobbene,
                    så det er viktig at du fremstår som positiv og motivert for jobben.
                </BodyLong>

                <Heading size="medium" level="3" spacing>
                    Bruk nettverket ditt
                </Heading>
                <BodyLong spacing>
                    Mange finner jobb gjennom nettverket sitt. Fortell at du er på jakt etter jobb. Jo flere du snakker
                    med, jo større sjanse er det for at det dukker opp jobbmuligheter.
                </BodyLong>

                <Heading size="medium" level="3" spacing>
                    Ring på dørene
                </Heading>
                <BodyLong spacing>
                    Det er mange jobber som ikke blir lyst ut på nettstedene. Ta deg derfor en runde og ring på dørene
                    hos bedriftene og spør om de trenger hjelp i sommer.
                </BodyLong>
                <BodyLong className="mb-3">
                    Sjekk flere jobbsøkertips på{" "}
                    <DsLink href="https://www.nav.no/kom-i-gang-som-jobbsoker">nav.no</DsLink>
                </BodyLong>

                <LinkPanel className="arb-link-panel-primary" href="/stillinger?q=sommerjobb">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Se alle sommerjobber
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-6">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="image-link-panel-grid-medium">
                    <ImageLinkPanelMedium
                        href="/superrask-soknad-person"
                        image="/images/jobbsoker.jpg"
                        alt="En person som skriver på mobilen sin."
                        title="Nyhet! Superrask søknad"
                        description="En enklere måte å komme i kontakt med bedrifter."
                        color="secondary"
                    />
                    <ImageLinkPanelMedium
                        image="/images/students.jpg"
                        alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                        title="Tips til jobbsøknaden"
                        description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte akkurat deg."
                        href="/tips-til-jobbsoknaden"
                        color="tertiary"
                    />
                </div>
            </div>
        </Layout>
    );
}
