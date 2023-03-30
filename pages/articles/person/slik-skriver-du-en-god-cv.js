import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import LayoutArticles from "@/pages/components/layouts/LayoutArticles";
import IllustrationArticle from "@/pages/components/images/IllustrationArticle";

export default function slikSkriverDuEnGodCv() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/articles/person">Tilbake</Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Slik skriver du en god CV
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Med noen enkle grep kan du øke sjansene dine for å bli kalt inn til et intervju. Her får du
                        tipsene som gjør at CV-en din blir lagt merke til.
                    </Ingress>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            CV og søknad
                        </Heading>
                        <BodyLong>
                            Arbeidsgivere krever ofte både CV og søknad når du søker på en jobb. Start med CV-en først,
                            da er det lettere å skrive søknaden.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="medium" level="2" spacing>
                            Tilpass CV-en
                        </Heading>
                        <BodyLong>
                            Finn ut hvilken informasjon som er viktig for arbeidsgiveren. Tilpass CV-en etter jobben du
                            søker på, litt avhengig av hvor mye arbeidserfaring og utdanning du har.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Personlige opplysninger
                        </Heading>
                        <BodyLong>
                            Benytter du CV-tjenesten på arbeidsplassen.no, vil navnet ditt, fødselsdato, e-post,
                            telefonnummer og adresse bli hentet inn automatisk. Du kan selv redigere opplysningene i
                            etterkant.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Utdanning
                        </Heading>
                        <BodyLong>
                            Start med den utdanningen du tok sist. Fag eller navn på utdanningen må være med. Oppgi
                            lærested og når utdanningen startet og sluttet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Fagbrev/svennebrev, mesterbrev og autorisasjon
                        </Heading>
                        <BodyLong>
                            Har du tatt yrkesfaglig utdanning og har fagbrev eller svennebrev, bør du legge det inn i
                            CV-en.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Arbeidserfaring
                        </Heading>
                        <BodyLong>
                            Start med den siste jobben. Før opp stillingstittel og perioden du jobbet der. Du kan også
                            oppgi arbeidsoppgaver og ansvarsområder i stikkordsform. I CV-en på arbeidsplassen.no kan du
                            automatisk hente inn arbeidserfaringen din fra 3015 og frem til i dag.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Annen erfaring
                        </Heading>
                        <BodyLong>
                            Har du erfaring fra for eksempel verv eller frivillig arbeid, bør du inkludere det.
                            Tillitsverv fra skole, idrett, borettslag og lignende viser at du er villig til å påta deg
                            ansvar, er utadvendt og engasjert.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Førerkort
                        </Heading>
                        <BodyLong>
                            Hvis du har førerkortet, kan det være fint å få med det. Og selvsagt nødvendig hvis
                            stillingen krever førerkort.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Kurs
                        </Heading>
                        <BodyLong>
                            Før opp de kurs som er relevante for stillingen du søker. Har du tatt et regnskapskurs, er
                            det relevant for økonomistillinger. Førstehjelpskurs kan være relevant for enkelte jobber.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Sertifiseringer og sertifikater
                        </Heading>
                        <BodyLong>
                            Har du én eller flere sertifiseringer, for eksempel ADK-sertifisering, tar du det med i
                            CV-en. Truckførerbevis er et annet eksempel.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Språk
                        </Heading>
                        <BodyLong>
                            Før opp språk du behersker, og på hvilket nivå muntlig og skriftlig. Husk å ta med
                            førstespråket ditt (morsmål).
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Vitnemål og attester
                        </Heading>
                        <BodyLong>
                            Du kan skrive «Jeg sender vitnemål og attester ved forespørsel» i søknaden. Lever aldri fra
                            deg originale dokumenter. Du må selv sørge for at kopier og vitnemål er attestert. En kopi
                            med stempel og underskrift viser at kopien er riktig, hvis arbeidsgiver krever det.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Sammendrag
                        </Heading>
                        <BodyLong spacing>
                            Bruk tid på å formulere et godt sammendrag (nøkkelkvalifikasjoner) som viser at erfaringen
                            din passer til akkurat denne stillingen. Hvis du søker på en annen stilling senere, må du
                            spisse sammendraget mot den.
                        </BodyLong>
                        <BodyLong>
                            Søker du på en stilling innenfor kontor og økonomi, kan et sammendrag for eksempel
                            inneholde:
                        </BodyLong>
                        <ul>
                            <li>3 års erfaring med saksbehandling og ansvar for egen kundeportefølje.</li>
                            <li>
                                8 års erfaring som frivillig besøkskontakt for Røde Kors. Jobben har gjort meg
                                omgjengelig, imøtekommende og serviceinnstilt.
                            </li>
                            <li>Årstudium innenfor økonomi, i tillegg to kveldskurs i Excel.</li>
                        </ul>
                    </section>

                    <section className="arb-article-section">
                        <LinkPanel
                            className="arb-primary-bg-text arb-link-panel"
                            href="https://arbeidsplassen.nav.no/cv/"
                        >
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Opprett en CV
                            </LinkPanel.Title>
                        </LinkPanel>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
