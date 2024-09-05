import React from "react";
import { Accordion, BodyLong, Heading, LinkPanel, List } from "@navikt/ds-react";
import FigureWithSearchBar from "@/src/common/components/FigureWithSearchBar";
import VisualChip from "@/src/common/components/VisualChip";

export default function NyttSok() {
    return (
        <article className="nytt-sok-article mt-5 mb-24">
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

                <div className="mb-10">
                    <Heading size="medium" level="3" className="mb-5">
                        1. Utforskende søk
                    </Heading>

                    <BodyLong className="mb-5">
                        Start bredt for å oppdage ulike muligheter innen ditt fagfelt. Bruk generelle søkeord relatert
                        til din bakgrunn, og andre nøkkelord som du er interessert i.
                    </BodyLong>
                    <div className="mb-5">
                        <List
                            as="ul"
                            className="inline-block-list ul-hidden-heading"
                            title="Forslag til generelle søkeord"
                            headingTag="span"
                        >
                            <List.Item>
                                <VisualChip text="undervisning" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="forskning" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="helseteknologi" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="Akershus" />
                            </List.Item>
                        </List>
                    </div>

                    <BodyLong>
                        Med et utforskende søk kan du oppdage nye karriereveier og bruksområder for din kompetanse som
                        du kanskje ikke hadde tenkt på tidligere.
                    </BodyLong>
                </div>

                <div className="mb-10">
                    <Heading size="medium" level="3" className="mb-5">
                        2. Spisset søk
                    </Heading>

                    <BodyLong className="mb-5">
                        Når du vet hva du leter etter, bruk spesifikke søkeord og kombiner med stillingstittel,
                        fagområde, arbeidssted og andre relevante filtre for mer presise resultater.
                    </BodyLong>

                    <div className="mb-5">
                        <List
                            as="ul"
                            className="inline-block-list ul-hidden-heading"
                            title="Forslag til spesifikke søkeord"
                            headingTag="span"
                        >
                            <List.Item>
                                <VisualChip text="faglærer" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="matematikklærer" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="realfag" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="naturfag" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="matematikk" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="videregående" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="Bergen" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="fast" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="heltid" />
                            </List.Item>
                        </List>
                    </div>
                    <BodyLong>Spissede søk er effektive når du har en klar idé om hva slags jobb du vil ha.</BodyLong>
                </div>
                <div className="mb-10">
                    <Heading size="medium" level="3" className="mb-5">
                        3. Se på tvers av bransjer
                    </Heading>

                    <BodyLong className="mb-5">
                        Søk på ferdigheter, interesser eller arbeidsforhold fremfor tradisjonelle stillingstitler.
                    </BodyLong>

                    <div className="mb-5">
                        <List
                            as="ul"
                            className="inline-block-list ul-hidden-heading"
                            title="Forslag til søkeord med bransjer"
                            headingTag="span"
                        >
                            <List.Item>
                                <VisualChip text="kundeservice" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="deltid" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="kveldsvakt" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="helg" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="må ha førerkort" />
                            </List.Item>
                        </List>
                    </div>

                    <BodyLong>
                        Ved å fokusere på ferdigheter eller arbeidsforhold, oppdager du spennende muligheter i bransjer
                        eller roller du ikke umiddelbart tenkte på.
                    </BodyLong>
                </div>
                <div className="mb-12">
                    <Heading size="medium" level="3" className="mb-5">
                        4. Finn sesongarbeid
                    </Heading>

                    <BodyLong className="mb-5">
                        Kombiner nøkkelord for sesongbaserte jobber med relevante filtre.
                    </BodyLong>

                    <div className="mb-5">
                        <List
                            as="ul"
                            className="inline-block-list ul-hidden-heading"
                            title="Forslag til søkeord med sesongarbeid"
                            headingTag="span"
                        >
                            <List.Item>
                                <VisualChip text="julehjelp" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="student" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="butikk" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="deltid" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="sesong" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="trenger ikke førerkort" />
                            </List.Item>
                            <List.Item>
                                <VisualChip text="ingen krav til utdanning" />
                            </List.Item>
                        </List>
                    </div>

                    <BodyLong>
                        Ved å avgrense søket med relevante filtre finner du raskt frem til jobber som passer for deg.
                    </BodyLong>
                </div>

                <div className="mb-12">
                    <Heading size="large" level="2" className="mb-5">
                        Tips for effektive søk
                    </Heading>

                    <List as="ul" className="mb-10 ul-hidden-heading" title="Tips for effektive søk" headingTag="span">
                        <List.Item>
                            Fritekstord som for eksempel “lager” eller “julehjelp” utvider ofte søket ditt ved å
                            inkludere flere mulige treff, mens filtre og yrker begrenser søket til spesifikke kriterier.
                            Eksperimenter med ulike kombinasjoner for å finne den rette balansen.
                        </List.Item>
                        <List.Item>
                            Prøv lignende eller relaterte begreper for å fange opp flere relevante stillinger. For
                            eksempel: lærer, pedagog, coach.
                        </List.Item>
                        <List.Item>
                            Vær åpen for uventede muligheter – din bakgrunn kan være verdifull i bransjer eller roller
                            du ikke umiddelbart tenker på.
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
                    <List
                        as="ul"
                        className="mb-8 ul-hidden-heading"
                        title="Ting du kan gjøre med et lagret søk"
                        headingTag="span"
                    >
                        <List.Item>Raskt gå tilbake til tidligere søk</List.Item>
                        <List.Item>Få e-postvarsler om nye jobber som matcher søket ditt</List.Item>
                    </List>

                    <Heading size="small" level="4" className="mb-5">
                        Slik gjør du det
                    </Heading>
                    <List
                        as="ol"
                        className="mb-5 ul-hidden-heading"
                        title="Slik lagrer du søkene dine"
                        headingTag="span"
                    >
                        <List.Item>Utfør et søk med fritekst og filtre</List.Item>
                        <List.Item>Klikk på "Lagre søk" under søkefeltet</List.Item>
                        <List.Item>Gi søket et navn og velg om du vil ha e-postvarsler</List.Item>
                    </List>
                    <BodyLong>
                        <strong>Tips:</strong> Du kan lagre flere søk for ulike jobbtyper eller steder du er interessert
                        i.
                    </BodyLong>
                </div>
                <div className="mb-8">
                    <Heading size="large" level="2" className="mb-5">
                        Tilgjengelige filter
                    </Heading>
                    <BodyLong className="mb-5">Vi har lansert fire nye filtre:</BodyLong>
                    <List as="ul" className="mb-5 ul-hidden-heading" title="Nye søkefiltre" headingTag="span">
                        <List.Item>reisevei</List.Item>
                        <List.Item>utdanningsnivå</List.Item>
                        <List.Item>erfaring</List.Item>
                        <List.Item>førerkort</List.Item>
                    </List>
                    <BodyLong className="mb-5">Les mer om våre fitre:</BodyLong>

                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Publisert
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <List
                                    as="ul"
                                    className="ul-hidden-heading"
                                    title="Nye filtre med publiseringsdato"
                                    headingTag="span"
                                >
                                    <List.Item>nye i dag</List.Item>
                                    <List.Item>nye siste 3 døgn</List.Item>
                                    <List.Item>nye siste uka</List.Item>
                                </List>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Sted (nyhet)
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <BodyLong>Filtrer på reisevei, fylke, kommune eller utenfor Norge.</BodyLong>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Yrke og sektor
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <Heading level="4" size="small" className="mb-5">
                                    Yrke
                                </Heading>
                                <BodyLong className="mb-5">Søk basert på yrkeskategorier.</BodyLong>
                                <Heading level="4" size="small" className="mb-5">
                                    Sektor
                                </Heading>
                                <BodyLong className="mb-5">Velg mellom offentlig og privat sektor.</BodyLong>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Utdanningsnivå, erfaring og førerkort (nyhet)
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <Heading level="4" size="small" className="mb-5">
                                    Utdanningsnivå
                                </Heading>
                                <BodyLong className="mb-5">Finn jobber som passer ditt utdanningsnivå.</BodyLong>
                                <List
                                    as="ul"
                                    className="mb-8 ul-hidden-heading"
                                    title="Filtre basert på utdanningsnivå"
                                    headingTag="span"
                                >
                                    <List.Item>ingen krav til utdanning</List.Item>
                                    <List.Item>videregående skole</List.Item>
                                    <List.Item>fag- eller svennebrev</List.Item>
                                    <List.Item>fagskole eller tilsvarende</List.Item>
                                    <List.Item>bachelor eller tilsvarende</List.Item>
                                    <List.Item>master eller tilsvarende</List.Item>
                                    <List.Item>forskningsgrad</List.Item>
                                </List>
                                <Heading level="4" size="small" className="mb-5">
                                    Erfaring
                                </Heading>
                                <BodyLong className="mb-5">Filtrer jobber ut ifra hvor mye erfaring du har.</BodyLong>
                                <List
                                    as="ul"
                                    className="mb-8 ul-hidden-heading"
                                    title="Filtre basert på erfaring"
                                    headingTag="span"
                                >
                                    <List.Item>ingen krav til arbeidserfaring</List.Item>
                                    <List.Item>noe arbeidserfaring (1-3 år)</List.Item>
                                    <List.Item>mye arbeidserfaring (4+ år)</List.Item>
                                </List>
                                <Heading level="4" size="small" className="mb-5">
                                    Førerkort
                                </Heading>
                                <BodyLong className="mb-5">
                                    Filtrer på om førerkort for bil er nødvendig eller ikke.
                                </BodyLong>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Arbeidsspråk
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <BodyLong className="mb-5">Finn jobber som passer for språkene du kan.</BodyLong>

                                <List
                                    as="ul"
                                    className="ul-hidden-heading"
                                    title="Filtre basert på arbeidsspråk"
                                    headingTag="span"
                                >
                                    <List.Item>norsk</List.Item>
                                    <List.Item>engelsk</List.Item>
                                    <List.Item>skandinavisk</List.Item>
                                    <List.Item>samisk</List.Item>
                                </List>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Omfang og ansettelseform
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <Heading level="4" size="small" className="mb-5">
                                    Omfang
                                </Heading>
                                <BodyLong className="mb-5">Velg om du ønsker heltid- eller deltidsstillinger.</BodyLong>
                                <Heading level="4" size="small" className="mb-5">
                                    Ansettelsesform
                                </Heading>
                                <BodyLong className="mb-5">
                                    Filtrer basert på hvilken type ansettelse du ser etter.
                                </BodyLong>
                                <List
                                    as="ul"
                                    className="ul-hidden-heading"
                                    title="Filtre basert på ansettelsesform"
                                    headingTag="span"
                                >
                                    <List.Item>engasjement</List.Item>
                                    <List.Item>fast</List.Item>
                                    <List.Item>feriejobb</List.Item>
                                    <List.Item>lærling</List.Item>
                                    <List.Item>prosjekt</List.Item>
                                    <List.Item>selvstendig næringsdrivende</List.Item>
                                    <List.Item>sesong</List.Item>
                                    <List.Item>vikariat</List.Item>
                                    <List.Item>åremål</List.Item>
                                </List>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="mb-5">
                            <Accordion.Header>
                                <Heading level="3" size="medium">
                                    Hjemmekontor
                                </Heading>
                            </Accordion.Header>
                            <Accordion.Content>
                                <BodyLong className="mb-5">Finn jobber som passer din ønskede arbeidsform.</BodyLong>
                                <List
                                    as="ul"
                                    className="ul-hidden-heading"
                                    title="Filtre basert på arbeidsform"
                                    headingTag="span"
                                >
                                    <List.Item>hybridkontor</List.Item>
                                    <List.Item>kun hjemmekontor</List.Item>
                                    <List.Item>hjemmekontor ikke mulig</List.Item>
                                </List>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>

                    <BodyLong>
                        Lykke til med jobbsøket! Ved å bruke disse strategiene og tipsene, er du godt rustet til å finne
                        din neste spennende jobbmulighet.
                    </BodyLong>
                </div>

                <LinkPanel className="arb-link-panel-primary" href="/stillinger">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Søk etter din neste jobb
                    </LinkPanel.Title>
                </LinkPanel>
            </div>
        </article>
    );
}
