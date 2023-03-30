import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import IllustrationArticle from "@/src/common/components/images/IllustrationArticle";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function jobbtreffPerson() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/articles/person"><ChevronLeftIcon aria-hidden="true" />Tilbake</Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Jobbtreff – møt bedrifter på en ny måte
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Vil du bli kjent med en bedrift? Følg en direkte sending der bedriften forteller om seg selv og
                        hva slags stillinger du kan søke på.
                    </Ingress>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <section className="arb-article-section">
                        <BodyLong spacing>
                            Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du som er jobbsøker bli kjent med
                            en bedrift som trenger folk. De forteller om hva slags kompetanse de trenger og om
                            jobbmulighetene.
                        </BodyLong>
                        <BodyLong spacing>
                            Dersom det er noe du gjerne vil at bedriften skal snakke om, kan du sende inn
                            forhåndsdefinerte temaer før sendingen starter. Du kan også stille spørsmål underveis i
                            sendingen.
                        </BodyLong>
                        <BodyLong>
                            Hvis du synes det bedriften forteller om er interessant, kan du ta kontakt med dem etter
                            jobbtreffet. De vil forklare hvordan du går fram.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Du er helt anonym
                        </Heading>
                        <BodyLong>
                            Det er helt uforpliktende og ufarlig å delta. Verken bedriften eller de andre deltakerne
                            ser, hører eller vet hvem som følger sendingen.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Slik følger du en sending
                        </Heading>
                        <BodyLong spacing>
                            Sendingen blir annonsert på arbeidsplassen.no. På forhånd kan du lese hva bedriften har
                            tenkt å fortelle om. Klikk på lenken for jobbtreffet når sendingen starter.
                        </BodyLong>
                        <BodyLong spacing>Du kan følge sendingen på telefon, PC eller Mac.</BodyLong>
                        <BodyLong>Lykke til på jobbtreff!</BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <LinkPanel
                            className="arb-primary-bg-text arb-link-panel"
                            href="https://arbeidsplassen.nav.no/jobbtreff"
                        >
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                Finn kommende jobbtreff
                            </LinkPanel.Title>
                        </LinkPanel>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
