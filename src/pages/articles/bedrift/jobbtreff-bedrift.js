import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import IllustrationArticle from "../../../common/components/images/IllustrationArticle";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";

export default function jobbtreffBedrift() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/articles/bedrift">Tilbake</Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Jobbtreff – møt jobbsøkere på en ny måte
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Trenger dere nye medarbeidere? Nå kan du presentere bedriften din for interesserte jobbsøkere i
                        en direkte sending.
                    </Ingress>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <section className="arb-article-section">
                        <BodyLong>
                            Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du presentere bedriften din og
                            fortelle om jobbmuligheter og hvilken kompetanse dere er ute etter.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Jobbtreffet er enkelt å gjennomføre. Slik gjør du det:
                        </Heading>
                        <ul>
                            <li>
                                <BodyLong>Du oppretter selv et jobbtreff på arbeidsplassen.no.</BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    Du kan koble jobbtreffet med stillingsannonsene dine. Annonsene er da tilgjengelige
                                    i jobbtreffet.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    Du velger om jobbtreffet skal annonseres for alle jobbsøkere på arbeidsplassen.no,
                                    eller om du vil invitere deltakere selv.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    Jobbsøkere kan i forkant av jobbtreffet sende inn forhåndsdefinerte temaer om hva de
                                    ønsker å høre om. Underveis i jobbtreffet så kan de stille spørsmål som dere kan
                                    besvare muntlig.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    Dere velger selv om en eller flere hos dere skal fortelle om bedriften. Dere kan
                                    dele lyd, kamera og en presentasjon hvis dere har det, for eksempel en PowerPoint.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    Dere sørger for å beskrive hvordan interesserte jobbsøkere kan komme i kontakt med
                                    dere.
                                </BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Deltakerne er anonyme
                        </Heading>
                        <BodyLong spacing>
                            Under sendingen er deltakerne anonyme. Deltakerne kan se og høre deg når du har skrudd på
                            lyd og kamera, men du kan ikke se dem, og deltakerne kan ikke se hverandre.
                        </BodyLong>
                        <BodyLong spacing>
                            Superrask søknad er en ny løsning for bedrifter som registrerer stillinger på
                            arbeidsplassen.no. Tjenesten er under utvikling og vi vil gjerne ha tilbakemelding på
                            hvordan den fungerer.
                        </BodyLong>
                        <BodyLong>
                            Se flere tips om{" "}
                            <Link href="https://arbeidsplassen.nav.no/jobbtreff/hvordan-arrangere">
                                hvordan du gjennomfører et jobbtreff.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <LinkPanel className="arb-primary-bg-text arb-link-panel" href="">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Lag nytt jobbtreff
                            </LinkPanel.Title>
                        </LinkPanel>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
