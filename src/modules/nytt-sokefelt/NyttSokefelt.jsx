import { BodyLong, Heading, Link as AkselLink, LinkPanel } from "@navikt/ds-react";
import NextLink from "next/link";
import React from "react";
import ImageLinkPanelMedium from "@/src/common/components/ImageLinkPanelMedium";

export default function NyttSokefelt() {
    return (
        <article>
            <div className="container-small mt-5 mb-12">
                <Heading size="xlarge" level="1" spacing>
                    Nytt søkefelt - enklere, raskere og mer fleksibelt!
                </Heading>

                <BodyLong size="large" spacing>
                    Nå kan du kombinere fritekst og filtre for å finne akkurat jobben du er ute etter.
                </BodyLong>
            </div>

            <div className="container-medium mb-12">
                <img className="article-image" src="/images/ansatt.png" alt="En glad person som står i en butikk." />
            </div>

            <div className="container-small mb-16">
                <BodyLong spacing>
                    Ved å legge til flere ord i søket ditt, vil du oppdage flere relevante stillinger og øke sjansen for
                    å lande drømmejobben.
                </BodyLong>
                <BodyLong>Du kan bruke det nye søket på flere måter:</BodyLong>
                <ul aria-label="Liste over flere måter å bruke søket på">
                    <li className="mb-2">
                        <BodyLong>
                            <strong>Utforskende søk</strong> – start bredt for å oppdage ulike muligheter
                        </BodyLong>
                    </li>
                    <li className="mb-2">
                        <BodyLong>
                            <strong>Spisset søk</strong> – når du har en klar idé om hva slags jobb du vil ha
                        </BodyLong>
                    </li>
                    <li className="mb-2">
                        <BodyLong>
                            <strong>Se på tvers av bransjer</strong> – søk på ferdigheter og interesser fremfor
                            tradisjonelle stillingstitler
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong className="mb-6">
                            <strong>Finn sesongarbeid</strong> – kombiner nøkkelord for sesongbaserte jobber
                        </BodyLong>
                    </li>
                </ul>
                <BodyLong>
                    <AkselLink as={NextLink} href="/slik-bruker-du-det-nye-soket" className="mb-12">
                        Les mer om hvordan du kan bruke søket for best resultat
                    </AkselLink>
                </BodyLong>
                <LinkPanel className="arb-link-panel-primary" href="/stillinger">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Prøv det nye søket
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-24">
                <Heading size="large" level="2" spacing>
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
                        image="/images/jobbtreff.jpg"
                        title="Enklere å finne jobber som kan passe"
                        alt="Bilde av person med laptop"
                        description="Vi bruker kunstig intelligens til å plassere annonsen i den kategorien som den (mest sannsynlig) hører hjemme i."
                        href="/nye-filtre"
                        color="tertiary"
                    />
                </div>
            </div>
        </article>
    );
}
