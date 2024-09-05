import React from "react";
import { Accordion, BodyLong, Heading, LinkPanel, List } from "@navikt/ds-react";
import FigureWithSearchBar from "@/src/common/components/FigureWithSearchBar";
import VisualChip from "@/src/common/components/VisualChip";

export default function NyttSok() {
    return (
        <article className="nytt-sok-article">
            <div className="container-small mt-5 mb-12">
                <Heading size="xlarge" level="1" spacing>
                    Slik bruker du det nye søket
                </Heading>

                <BodyLong size="large" className="mb-12">
                    Du kan nå kombinere fritekst og filtre for å finne akkurat de jobbene du er ute etter, enklere og
                    raskere.
                </BodyLong>

                <div className="mb-12">
                    <FigureWithSearchBar />
                </div>

                <Heading size="large" level="2" className="mb-5">
                    Fire måter å søke på
                </Heading>

                <Heading size="medium" level="3" className="mb-5">
                    1. Utforskende søk
                </Heading>

                <BodyLong className="mb-5">
                    Start bredt for å oppdage ulike muligheter innen ditt fagfelt. Bruk generelle søkeord relatert til
                    din bakgrunn, og andre nøkkelord som du er interessert i.
                </BodyLong>
                <div className="mb-5">
                    <List as="ul" className="mb-10 inline-block-list">
                        <List.Item>
                            <VisualChip text="undervisning" />
                        </List.Item>
                        <List.Item>
                            <VisualChip text="undervisning" />
                        </List.Item>
                        <List.Item>
                            <VisualChip text="undervisning" />
                        </List.Item>
                        <List.Item>
                            <VisualChip text="undervisning" />
                        </List.Item>
                    </List>
                </div>

                <BodyLong className="mb-5">
                    Med et utforskende søk kan du oppdage nye karriereveier og bruksområder for din kompetanse som du
                    kanskje ikke hadde tenkt på tidligere.
                </BodyLong>

                <Heading size="medium" level="3" className="mb-5">
                    2. Spisset søk
                </Heading>

                <BodyLong className="mb-5">
                    Når du vet hva du leter etter, bruk spesifikke søkeord og kombiner med stillingstittel, fagområde,
                    arbeidssted og andre relevante filtre for mer presise resultater.
                </BodyLong>

                <div className="mb-5">
                    <VisualChip text="undervisning" />
                </div>

                <Heading size="medium" level="3" className="mb-5">
                    3. Se på tvers av bransjer
                </Heading>

                <BodyLong className="mb-5">
                    Søk på ferdigheter, interesser eller arbeidsforhold fremfor tradisjonelle stillingstitler.
                </BodyLong>

                <div className="mb-5">
                    <VisualChip text="undervisning" />
                </div>

                <BodyLong className="mb-5">
                    Ved å fokusere på ferdigheter eller arbeidsforhold, oppdager du spennende muligheter i bransjer
                    eller roller du ikke umiddelbart tenkte på.
                </BodyLong>

                <Heading size="medium" level="3" className="mb-5">
                    4. Finn sesongarbeid
                </Heading>

                <BodyLong className="mb-5">Kombiner nøkkelord for sesongbaserte jobber med relevante filtre.</BodyLong>

                <div className="mb-5">
                    <VisualChip text="undervisning" />
                </div>

                <BodyLong className="mb-12">
                    Ved å avgrense søket med relevante filtre finner du raskt frem til jobber som passer for deg.
                </BodyLong>

                <Heading size="large" level="2" className="mb-5">
                    Tips for effektive søk
                </Heading>

                <List as="ul" className="mb-10">
                    <List.Item>
                        Fritekstord som for eksempel “lager” eller “julehjelp” utvider ofte søket ditt ved å inkludere
                        flere mulige treff, mens filtre og yrker begrenser søket til spesifikke kriterier. Eksperimenter
                        med ulike kombinasjoner for å finne den rette balansen.
                    </List.Item>
                    <List.Item>
                        Prøv lignende eller relaterte begreper for å fange opp flere relevante stillinger. For eksempel:
                        lærer, pedagog, coach.
                    </List.Item>
                    <List.Item>
                        Vær åpen for uventede muligheter – din bakgrunn kan være verdifull i bransjer eller roller du
                        ikke umiddelbart tenker på.
                    </List.Item>
                    <List.Item>
                        Start gjerne bredt og snevre inn søket gradvis etter hvert som du utforsker mulighetene.
                    </List.Item>
                </List>

                <Heading size="medium" level="3" className="mb-5">
                    Lagre søkene dine
                </Heading>
                <BodyLong className="mb-5">
                    Fikk du laget et perfekt søk? Ikke mist det! Med lagrede søk kan du:
                </BodyLong>
                <List as="ul" className="mb-20">
                    <List.Item>Raskt gå tilbake til tidligere søk</List.Item>
                    <List.Item>Få e-postvarsler om nye jobber som matcher søket ditt</List.Item>
                </List>

                <Heading size="small" level="4" className="mb-5">
                    Slik gjør du det
                </Heading>
                <List as="ol" className="mb-5">
                    <List.Item>Utfør et søk med fritekst og filtre</List.Item>
                    <List.Item>Klikk på "Lagre søk" under søkefeltet</List.Item>
                    <List.Item>Gi søket et navn og velg om du vil ha e-postvarsler</List.Item>
                </List>
                <BodyLong className="mb-12">
                    <strong>Tips:</strong> Du kan lagre flere søk for ulike jobbtyper eller steder du er interessert i.
                </BodyLong>

                <Heading size="large" level="2" className="mb-5">
                    Tilgjengelige filter
                </Heading>
                <BodyLong className="mb-5">Vi har lansert fire nye filtre:</BodyLong>
                <List as="ul" className="mb-5">
                    <List.Item>Reisevei</List.Item>
                    <List.Item>Utdanningsnivå</List.Item>
                    <List.Item>Erfaring</List.Item>
                    <List.Item>Førerkort</List.Item>
                </List>
                <BodyLong className="mb-5">Les mer om våre fitre:</BodyLong>

                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Publisert</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">Vi har lansert fire nye filtre:</BodyLong>
                            <List as="ul">
                                <List.Item>Nye i dag</List.Item>
                                <List.Item>Nye siste 3 døgn</List.Item>
                                <List.Item>Nye siste uka</List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Sted (nyhet)</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong>Filtrer på reisevei, fylke, kommune eller utenfor Norge.</BodyLong>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Yrke og sektor</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">
                                <strong>Yrke</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">Søk basert på yrkeskategorier.</BodyLong>
                            <BodyLong className="mb-5">
                                <strong>Sektor</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">Velg mellom offentlig og privat sektor.</BodyLong>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Utdanningsnivå, erfaring og førerkort (nyhet)</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">
                                <strong>Utdanningsnivå</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">Finn jobber som passer ditt utdanningsnivå.</BodyLong>
                            <List as="ul" className="mb-8">
                                <List.Item>Ingen krav til utdanning</List.Item>
                                <List.Item>Videregående skole</List.Item>
                                <List.Item>Fag- eller svennebrev</List.Item>
                                <List.Item>Fagskole eller tilsvarende</List.Item>
                                <List.Item>Bachelor eller tilsvarende</List.Item>
                                <List.Item>Master eller tilsvarende</List.Item>
                                <List.Item>Forskningsgrad</List.Item>
                            </List>
                            <BodyLong className="mb-5">
                                <strong>Erfaring</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">Filtrer jobber ut ifra hvor mye erfaring du har.</BodyLong>
                            <List as="ul" className="mb-8">
                                <List.Item>Ingen krav til arbeidserfaring</List.Item>
                                <List.Item>Noe arbeidserfaring (1-3 år)</List.Item>
                                <List.Item>Mye arbeidserfaring (4+ år)</List.Item>
                            </List>
                            <BodyLong className="mb-5">
                                <strong>Førerkort</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">
                                Filtrer på om førerkort for bil er nødvendig eller ikke.
                            </BodyLong>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Arbeidsspråk</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">Finn jobber som passer for språkene du kan.</BodyLong>

                            <List as="ul">
                                <List.Item>Norsk</List.Item>
                                <List.Item>Engelsk</List.Item>
                                <List.Item>Skandinavisk</List.Item>
                                <List.Item>Samisk</List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Omfang og ansettelseform</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">
                                <strong>Omfang</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">Velg om du ønsker heltid- eller deltidsstillinger.</BodyLong>
                            <BodyLong className="mb-5">
                                <strong>Ansettelsesform</strong>
                            </BodyLong>
                            <BodyLong className="mb-5">
                                Filtrer basert på hvilken type ansettelse du ser etter.
                            </BodyLong>
                            <List as="ul">
                                <List.Item>Engasjement</List.Item>
                                <List.Item>Fast</List.Item>
                                <List.Item>Feriejobb</List.Item>
                                <List.Item>Lærling</List.Item>
                                <List.Item>Prosjekt</List.Item>
                                <List.Item>Selvstendig næringsdrivende</List.Item>
                                <List.Item>Sesong</List.Item>
                                <List.Item>Vikariat</List.Item>
                                <List.Item>Åremål</List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Header>Hjemmekontor</Accordion.Header>
                        <Accordion.Content>
                            <BodyLong className="mb-5">Finn jobber som passer din ønskede arbeidsform.</BodyLong>
                            <List as="ul">
                                <List.Item>Hybridkontor</List.Item>
                                <List.Item>Kun hjemmekontor</List.Item>
                                <List.Item>Hjemmekontor ikke mulig</List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>

                <BodyLong className="mb-8">Finn jobber som passer din ønskede arbeidsform.</BodyLong>

                <LinkPanel className="arb-link-panel-primary" href="/stillinger">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Vis ledige Søk etter din neste jobb
                    </LinkPanel.Title>
                </LinkPanel>
            </div>
        </article>
    );
}
