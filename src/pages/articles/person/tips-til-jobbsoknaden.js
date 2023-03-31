import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import IllustrationArticle from "../../../common/components/images/IllustrationArticle";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function tipsTilJobbsoknaden() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-2">
                        <Link href="/">
                            <ChevronLeftIcon aria-hidden="true" />
                            Til forsiden
                        </Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Tips til jobbsøknaden
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Det er ikke så vanskelig. Her får du våre tips om hvordan skrive søknaden slik at en
                        arbeidsgiver får lyst til å møte akkurat deg.
                    </Ingress>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <Heading size="large" level="2" spacing>
                        Søknaden er et svar på annonsen
                    </Heading>
                    <BodyLong spacing>
                        Målet med jobbsøknaden er å bli kalt inn til intervju. En god søknad er forutsetningen for at en
                        arbeidsgiver skal få lyst til å møte akkurat deg. Les annonsen nøye og se hva de spør etter.
                        Søknaden bør svare direkte på stillingsannonsen og vise at nettopp du kan være rett person for
                        jobben.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Dette bør du ha med
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>Start med en kort innledning om hvor du har funnet stillingen.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Beskriv hvorfor du har lyst på akkurat denne jobben.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Hvilke egenskaper og erfaringer har du som er viktig for denne jobben? Få fram dine
                                sterke sider.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                I en kort avslutning forteller du hvordan du kan kontaktes, når du kan starte i jobben,
                                og at du håper på positiv tilbakemelding.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="medium" level="3" spacing>
                        Flere tips
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>
                                Ta gjerne kontakt med arbeidsgiveren før du sender inn søknad. Det er lurt å planlegge
                                hva du skal spørre om før du tar kontakt.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>Søknaden skal være kort og målrettet.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Søknaden må se ryddig ut og bør maksimalt være på en side.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Fokuser på hva du kan.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Unngå skrivefeil.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Når søknaden og CV-en er sendt må du være tilgjengelig på telefon og sjekke e-posten din
                                ofte.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>Skriv en ny søknad til hver jobb du søker.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Har du ikke hørt noe to-tre uker etter søknadsfristen, kan du kontakte arbeidsgiveren og
                                høre hvor langt de er kommet i prosessen.
                            </BodyLong>
                        </li>
                    </ul>
                    <BodyLong className="mb-3">
                        Husk å sende CV sammen med jobbsøknaden. Du kan registrere CV kostnadsfritt på
                        arbeidsplassen.no.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Åpen søknad
                    </Heading>
                    <BodyLong className="mb-3">
                        Er det steder du kunne tenke deg å jobbe? Du kan sende en jobbsøknad selv om arbeidsgiveren ikke
                        har lyst ut noen ledige stilliger. Dette kalles en åpen søknad. En åpen søknad er lik en vanlig
                        søknad, men vær tydelig på hvorfor du ønsker å jobbe akkurat der. Lykke til med jobbsøkingen.
                    </BodyLong>

                    <LinkPanel className="arb-primary-bg-text arb-link-panel" href="https://arbeidsplassen.nav.no/cv/">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Opprett en CV
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </div>
        </LayoutArticles>
    );
}
