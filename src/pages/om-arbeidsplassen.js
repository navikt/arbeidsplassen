import { BodyLong, Heading, Link } from "@navikt/ds-react"
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles"
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function omArbeidsplassen() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/"><ChevronLeftIcon aria-hidden="true" />Til forsiden</Link>
                    </div>

                    <section className="arb-article-section">
                        <Heading size="xlarge" level="1" spacing>
                            Om arbeidsplassen.no
                        </Heading>
                        <BodyLong spacing>
                            Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at
                            arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en
                            jobb eller leter etter en kandidat.
                        </BodyLong>
                        <BodyLong spacing>
                            Alle jobbsøkere, arbeidsgivere, vikar- og bemanningsbyråer og andre stillingsaktører er
                            velkommen til arbeidsplassen.no. Hensikten er at jobbsøkere på jakt etter jobb, og bedrifter
                            på jakt etter kandidater skal kunne oppdage og komme i kontakt med hverandre, så enkelt som
                            mulig. Alle tjenestene er derfor kostnadsfrie.
                        </BodyLong>
                        <BodyLong>Arbeidsplassen.no er eid av NAV.</BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Arbeidsplassen.no har den største oversikten over arbeidsmarkedet
                        </Heading>
                        <BodyLong spacing>
                            På arbeidsplassen.no kan jobbsøkere utføre søk og finne stillingsannonser som opprinnelig er
                            publisert i ulike portaler. Dette kan vi gjøre fordi vi har et utstrakt samarbeid med store
                            og små stillingsaktører.
                        </BodyLong>
                        <BodyLong spacing>
                            Arbeidsgivere kan også velge å logge seg på arbeidsplassen.no og lyse ut direkte på
                            arbeidsplassen.no.
                        </BodyLong>
                        <BodyLong>
                            Arbeidsplassen.no gir dermed Norges største oversikt over utlyste stillinger.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Arbeidsplassen.no er selvbetjent
                        </Heading>
                        <BodyLong spacing>
                            Vi har utviklet en moderne digital infrastruktur med selvbetjening og brukervennlighet som
                            viktigste prinsipp. Tjenesten er i kontinuerlig forbedring og utvikling.
                        </BodyLong>
                        <BodyLong>
                            Den virkelige verdien i arbeidsplassen.no er det jobbsøkerne og arbeidsgiverne som skaper
                            hver dag.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Tjenestene på arbeidsplassen.no er kostnadsfrie
                        </Heading>
                        <BodyLong spacing>
                            Rekruttering oppleves vanligvis som kostbart og tidkrevende, spesielt for små og mellomstore
                            bedrifter. Vi vet at en del arbeidsgivere av den grunn velger å ikke lyse ut sine stillinger
                            offentlig. Vi ønsker at alle jobbsøkere skal kunne finne jobbene som finnes på
                            arbeidsmarkedet, uten å være begrenset av eget nettverk.
                        </BodyLong>
                        <BodyLong>
                            Arbeidsplassen.no er en tjeneste for å bedre alles muligheter til å gjøre seg synlig på
                            arbeidsmarkedet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Arbeidsplassen.no er sikker
                        </Heading>
                        <BodyLong spacing>Tilgang til tjenestene styres gjennom Altinn og ID-porten.</BodyLong>
                        <BodyLong>Velkommen til arbeidsplassen.no!</BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    )
}
