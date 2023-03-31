import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function vilkarOgRetningslinjer() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <Link href="/" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til forsiden
                    </Link>
                    <Heading spacing size="xlarge" level="1">
                        Vilkår og retningslinjer
                    </Heading>

                    <Heading size="medium" level="2" spacing>
                        Vilkår for å bruke arbeidsgivertjenestene
                    </Heading>
                    <BodyLong>
                        Arbeidsgivere må godta flere vilkår for å benytte tjenestene på arbeidsplassen.no. De viktigste
                        vilkårene:
                    </BodyLong>
                    <ul>
                        <li>
                            <BodyLong>
                                Stillingsannonser som arbeidsgiver kan publisere skal følge retningslinjer for innhold i
                                stillingsannonser, se eget punkt under.
                            </BodyLong>
                        </li>
                    </ul>
                    <BodyLong className="mb-3">
                        <Link href="/vilkar">Her kan du lese alle vilkårene for bruk av arbeidsplassen.no.</Link>
                    </BodyLong>

                    <Heading size="medium" level="2" spacing>
                        Vilkår for bruk av API for stillingsannonser
                    </Heading>
                    <BodyLong spacing>
                        Gjennom arbeidsplassen.no tilbyr NAV data fra stillingssøket på arbeidsplassen.no.
                        Stillingssøket inneholder en oversikt og informasjon om de fleste aktive utlyste stillinger.
                        Stillingssøket inneholder både stillinger som er registrert direkte hos NAV, publisert til NAV
                        via et åpent API og hentet inn fra våre samarbeidspartnere.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        <Link href="/vilkar-api">Her kan du lese vilkårene for bruk av API for stillingsannonser.</Link>
                    </BodyLong>

                    <Heading size="medium" level="2" spacing>
                        Retningslinjer for innhold i stillingsannonser
                    </Heading>
                    <BodyLong>
                        Arbeidsgiver kan selv publisere stillingsannonser på arbeidsplassen.no. I tillegg henter
                        arbeidsplassen.no stillingsannonser fra mange ulike kilder til stillingssøket. Alle annonser
                        blir kontrollert opp mot NAVs retningslinjer for innhold i stillingsannonser. De viktigste
                        retningslinjene er:
                    </BodyLong>
                    <ul>
                        <li>
                            <BodyLong>Annonser må vise til konkrete stillinger med ansettelse og lønn</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Arbeidsgivere kan ikke kreve betaling av arbeidssøkere for å søke stillinger
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>Innholdet i annonsen skal ikke være diskriminerende</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Annonser som fremstår som markedsføring av tjenester eller produkter uten å være
                                konkrete stillinger, er ikke tillatt.
                            </BodyLong>
                        </li>
                    </ul>
                    <BodyLong className="mb-3">
                        <Link href="/retningslinjer-stillingsannonser">
                            Her kan du lese Retningslinjer for innhold i stillingsannonser på arbeidsplassen.no.
                        </Link>
                    </BodyLong>

                    <Heading size="medium" level="2" spacing>
                        Retningslinjer for innhold i jobbtreff
                    </Heading>
                    <BodyLong spacing>
                        Arbeidsgiver kan selv opprette et jobbtreff for å fortelle om sin ledige stilling i en direkte
                        sending mens deltagere kan se og høre på.
                    </BodyLong>
                    <BodyLong>
                        <Link href="/retningslinjer-jobbtreff">
                            Her kan du lese Retningslinjer for innhold i jobbtreff på arbeidsplassen.no
                        </Link>
                    </BodyLong>
                </div>
            </div>
        </LayoutArticles>
    );
}
