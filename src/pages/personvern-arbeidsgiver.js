import { BodyLong, Heading, Link } from "@navikt/ds-react"
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles"
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function personvernArbeidsgiver() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/personvern"><ChevronLeftIcon aria-hidden="true" />Til personvernserklæring</Link>
                    </div>
                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for deg som representerer en arbeidsgiver
                    </Heading>
                    <BodyLong className="mb-4">Sist endret 1. februar 2022</BodyLong>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Innhold
                        </Heading>
                        <ul>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#information">Hvilke personopplysninger samler vi inn?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#goals">Hvilke formål brukes personopplysningene til?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#time">Hvor lenge lagres opplysningene?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#legal">
                                        Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                                    </Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#who">Hvem deles opplysningene med?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-arbeidsgiver#rights">Hvilke rettigheter har du?</Link>
                                </BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-subsection" id="information">
                        <Heading size="medium" level="2" spacing>
                            Hvilke personopplysninger samler vi inn?
                        </Heading>
                        <BodyLong>
                            Mens du er innlogget vil innloggingsinformasjon du avgir oppbevares i en informasjonskapsel,
                            som gjør at du forblir innlogget hele tiden mens du er inne på våre sider.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Stillingsannonser
                        </Heading>
                        <BodyLong spacing>
                            Vi behandler stillingsannonser som virksomheten har publisert på arbeidsplassen.no, herunder
                            personopplysninger du har oppgitt i disse, for eksempel navn og kontaktinformasjon. Dette
                            inkluderer stillinger sendt inn via rekrutteringssystemer vi samarbeider med. Annonserer du
                            stillingene dine i aviser tilknyttet Amedia eller Polaris media blir de automatisk overført
                            og vist på arbeidsplassen.no. Annonsene arkiveres og anonymiserte opplysninger brukes til
                            statistiske formål.
                        </BodyLong>
                        <BodyLong>
                            Arbeidsgivere kan ikke kreve noen form for avgift eller annet vederlag fra arbeidssøkere for
                            tilbud om ansettelse.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Beskrivelse av jobbtreff
                        </Heading>
                        <BodyLong>
                            Personopplysninger som er oppgitt i forbindelse med beskrivelsen av et jobbtreff.
                            Personopplysningene vil typisk være navn, telefonnummer, e-post og stillingstittel.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Video ved bruk av jobbtreff
                        </Heading>
                        <BodyLong spacing>
                            IP- adresse til arbeidsgivers representanter behandles når jobbtreffet avholdes i Pexip
                            videoløsning. Her samles også informasjon om navn på jobbtreffet og hvor lenge det har vart.
                        </BodyLong>
                        <BodyLong>
                            Videofremvisning hvor representant for arbeidsgiver presenterer bedrift/stilling. Denne
                            personinformasjonen kan være muntlig og skriftlig og er typisk kontaktinformasjon til
                            personer i bedriften ved spørsmål om stillingen eller søknad. Videoene strømmes kun i
                            forbindelse med videotreffet og lagres ikke i etterkant av jobbtreffet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="goals">
                        <Heading className="mb-2" size="medium" level="2">
                            Hvilke formål brukes personopplysningene til?
                        </Heading>
                        <Heading size="small" level="3" spacing>
                            Velfungerende arbeidsmarked
                        </Heading>
                        <BodyLong>
                            Arbeidsplassen.no skal bidra et velfungerende arbeidsmarked gjennom en åpen plattform for
                            arbeidsmarkedet. Vi lagrer og behandler personopplysninger for å gjøre det enklere for
                            jobbsøkere å finne jobb og for arbeidsgivere å skaffe arbeidskraft. Dette er i tråd med NAVs
                            samfunnsoppdrag om å få flere i arbeid.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Statistikk og kunnskap om arbeidsmarkedet
                        </Heading>
                        <BodyLong>
                            NAV benytter opplysningene fra arbeidsplassen.no til å utvikle statistikk og kunnskap om
                            arbeidsmarkedet. Les mer i{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-3">
                                NAVs personvernerklæring.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="time">
                        <Heading size="medium" level="2" spacing>
                            Hvor lenge lagres opplysningene?
                        </Heading>
                        <BodyLong spacing>
                            Stillingsannonser som er offentlig utlyst på arbeidsplassen.no er underlagt arkivplikt etter
                            arkivloven §6 og ivaretas for ettertiden.
                        </BodyLong>
                        <BodyLong spacing>
                            Beskrivelse av jobbtreff, og tilhørende kontaktinformasjon, lagres i inntil ett år etter at
                            det er avholdt. Jobbtreffet kan når som helst slettes av den enkelte arbeidsgiver.
                        </BodyLong>
                        <BodyLong spacing>
                            Lagring av IP-adresse, navn og lengde på jobbtreffet lagres i Pexip videoløsning i opptil
                            tre måneder etter jobbtreffdato. Deretter blir de slettet.
                        </BodyLong>
                        <BodyLong>
                            Videopresentasjonen ved bruk av jobbtreff lagres ikke i etterkant av jobbtreffet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="legal">
                        <Heading size="medium" level="2" spacing>
                            Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                        </Heading>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Offentlig myndighetsutøvelse
                        </Heading>
                        <BodyLong spacing>
                            NAV behandler personopplysninger for å utøve offentlig myndighet som følger av bestemmelser
                            i NAV-loven og arbeidsmarkedsloven om arbeidsrettet oppfølging, se særlig NAV-loven § 4 og
                            arbeidsmarkedsloven § 10. Det er også nødvendig å behandle personopplysningene til deg som
                            representerer arbeidsgiver, for at NAV skal kunne oppfylle sin overordnede oppgave med å
                            hjelpe å få jobbsøkere i arbeid.
                        </BodyLong>
                        <BodyLong>Eksempler på behandling basert på offentlig myndighetsutøvelse:</BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Bistå arbeidsgivere med å skaffe arbeidskraft</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Innhente informasjon om arbeidsmarkedet</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Arbeidsformidling</BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-subsection" id="who">
                        <Heading size="medium" level="2" spacing>
                            Hvem deles opplysningene med?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="2" spacing>
                            Brukere av arbeidsplassen.no
                        </Heading>
                        <BodyLong>
                            Stillingsannonser og jobbtreff er åpent tilgjengelig for alle brukere av arbeidsplassen.no
                            dersom det publiseres offentlig. Upubliserte opplysninger, slik som utkast til
                            stillingsannonser og jobbtreff, er kun tilgjengelig for de med tilgang i din virksomhet.
                            Inaktive annonser er ikke synlige i søk, fortsetter å være tilgjengelige gjennom URL-lenker
                            i en periode før de gjøres utilgjengelige.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            EURES-databasen
                        </Heading>
                        <BodyLong>
                            Stillingsannonser som publiseres på arbeidsplassen.no blir videresendt til EURES-databasen.
                            EURES (European Employment Services) er et samarbeid mellom EU-kommisjonen og EU/EØS-området
                            og Sveits. I Norge ligger EURES i NAV.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Åpne data
                        </Heading>
                        <BodyLong>
                            Aktive stillingsutlysninger er offentlig publiserte data som NAV igjen tilgjengeliggjør som
                            åpne data i tråd med føringer for offentlig myndigheter. Dette gjøres gjennom Felles
                            datakatalog som forvaltes av Digitaliseringsdirektoratet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Våre databehandlere
                        </Heading>
                        <BodyLong>
                            For å kunne tilby våre tjenester på arbeidsplassen.no benytter vi databehandlere, som
                            innebærer at vi deler dine personopplysninger med disse. Dette gjelder for eksempel
                            IT-leverandører som har avtaler med NAV. For å lese mer om dette, se{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-4">
                                NAVs generelle personvernerklæring.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="rights">
                        <Heading size="medium" level="2" spacing>
                            Hvilke rettigheter har du?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til innsyn og retting
                        </Heading>
                        <BodyLong>
                            Du har rett til å få vite hvilke personopplysninger vi har om deg, hvor vi har hentet dem
                            fra og be om retting av uriktige opplysninger. Personopplysninger knyttet til
                            stillingsannonser vil kunne rettes i systemet opplysningene ble oppgitt i opprinnelig, enten
                            det er et rekrutteringssystem eller direkte på arbeidsplassen.no. For innsyn i
                            personopplysninger knyttet til deg som representant for arbeidsgiver, må du{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-7">
                                ta kontakt med oss på nav.no.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="2" spacing>
                            Rett til å protestere og rett til sletting
                        </Heading>
                        <BodyLong spacing>
                            Du har rett til å protestere mot at opplysningene dine behandles på arbeidsplassen.no. For å
                            protestere, tar du kontakt med NAV. NAV vil da slutte å behandle opplysningene dine og
                            eventuelt slette dem, med mindre det er tungtveiende grunner til at NAV likevel må behandle
                            dem.
                        </BodyLong>
                        <BodyLong>
                            I helt spesielle tilfeller vil du kunne ha rett til å få slettet opplysninger om deg. For at
                            vi skal kunne slette personopplysninger om deg, forutsetter det at NAV ikke har en lovpålagt
                            plikt etter arkivloven eller annen lovgivning til å lagre opplysningene.
                        </BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    )
}
