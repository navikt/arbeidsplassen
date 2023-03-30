import { BodyLong, Heading, Link } from "@navikt/ds-react"
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles"

export default function personvernUnderOppfolging() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="//personvern">Til personvernserklæring</Link>
                    </div>
                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for deg som er under arbeidsrettet oppfølging fra NAV
                    </Heading>
                    <BodyLong>Publisert 1. februar 2022.</BodyLong>
                    <BodyLong spacing>Oppdatert 29. juni 2022.</BodyLong>
                    <BodyLong className="mb-4">
                        <em>Oppfølging</em> betyr veiledning og hjelp fra NAV til å skaffe ny jobb eller beholde jobben.
                        Dette får du dersom du har registrert deg som arbeidssøker hos NAV.
                    </BodyLong>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Innhold
                        </Heading>
                        <ul>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#information">Hvilke personopplysninger samler vi inn?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#goals">Hvilke formål brukes personopplysningene til?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#time">Hvor lenge lagres opplysningene?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#legal">
                                        Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                                    </Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#who">Hvem deles opplysningene med?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-under-oppfolging#rights">Hvilke rettigheter har du?</Link>
                                </BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-subsection" id="information">
                        <Heading size="medium" level="2" spacing>
                            Hvilke personopplysninger samler vi inn?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Profil
                        </Heading>
                        <BodyLong>
                            Når du tar i bruk innloggede tjenester på arbeidsplassen.no, innhenter vi grunnleggende
                            personalia fra folkeregisteret:
                        </BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Navn</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Telefonnummer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>E-postadresse</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Bostedsadresse</BodyLong>
                            </li>
                        </ul>
                        <BodyLong spacing>
                            Disse opplysningene er nødvendige for at vi skal kunne opprette en profil for deg. Dersom du
                            ikke ønsker at vi behandler disse opplysningene, vil vi ikke kunne opprette en profil. Du
                            kan redigere opplysningene vi har om deg, men det vil ikke påvirke dine registrerte data i
                            folkeregisteret.
                        </BodyLong>
                        <BodyLong>
                            Dersom du velger å ta i bruk øvrige tjenester på innloggede sider, vil vi lagre de
                            nødvendige opplysningene for å bruke tjenesten i din profil. Dette kan for eksempel være:
                        </BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Favoritter – stillinger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Lagrede søk – stillinger</BodyLong>
                            </li>
                        </ul>
                        <BodyLong spacing>Du kan slette disse opplysningene når du selv ønsker.</BodyLong>
                        <BodyLong>
                            Mens du er innlogget vil innloggingsinformasjon du avgir oppbevares i en informasjonskapsel,
                            som gjør at du forblir innlogget hele tiden mens du er inne på våre sider.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            CV-opplysninger
                        </Heading>
                        <BodyLong spacing>Du kan registrere følgende CV-opplysninger i vår CV-tjeneste:</BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Sammendrag</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Jobbønsker</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Utdanninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Fagbrev</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Språk</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Kompetanser</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Arbeidserfaringer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Andre erfaringer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Offentlge godkjenninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Andre godkjenninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Førerkort</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Kurs</BodyLong>
                            </li>
                        </ul>
                        <BodyLong>Du kan når som helst endre eller slette opplysningene i din CV.</BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Deltagelse på jobbtreff
                        </Heading>
                        <BodyLong>
                            Ingen data om din deltagelse på jobbtreff vil bli delt, hverken til andre deltagere,
                            bedriften eller til NAV. Vi lagrer ingen data om deg angående din deltagelse på jobbtreff.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="goals">
                        <Heading size="medium" level="2" spacing>
                            Hvilke formål brukes personopplysningene til?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
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

                    <section className="arb-article-subsection">
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

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Arbeidsrettet oppfølging fra NAV
                        </Heading>
                        <BodyLong>
                            NAV behandler personopplysningene til deg som er under arbeidsrettet oppfølging fra NAV, for
                            å kunne hjelpe deg å komme i arbeid raskere. Dette er i tråd med de lovpålagte oppgavene vi
                            har. Opplysningene du oppgir i din CV kan brukes som en del av envurdering av dine
                            rettigheter til tjenester og ytelser fra NAV, Dette omfatter arbeidsformidling, vurdering av
                            ditt bistandsbehov, arbeidsevne og rett til dagpenger. Les mer i{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-3">
                                NAVs personvernerklæring.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="time">
                        <Heading size="medium" level="2" spacing>
                            Hvor lenge lagres opplysningene?
                        </Heading>
                        <BodyLong>
                            Opplysningene oppbevares og behandles så lenge du er under oppfølging av NAV.
                            CV-opplysningene du har oppgitt kan brukes som et grunnlag for vurdering av dine rettigheter
                            til tjenester og ytelser fra NAV. Se{" "}
                            <Link href="https://www.nav.no/personvernerklaering#hvilke">NAVs personvernerklæring</Link>{" "}
                            for informasjon om slik behandling. NAV har en lovpålagt plikt til å oppbevare opplysningene
                            i CV også etter at saksbehandlingen er avsluttet jf. Arkivloven § 6.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="legal">
                        <Heading size="medium" level="2" spacing>
                            Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                        </Heading>
                        <BodyLong>
                            Utøvelse av offentlig myndighet, jf. NAV-loven § 4 og arbeidsmarkedsloven § 10 NAV behandler
                            personopplysninger for å utøve offentlig myndighet som følger av bestemmelser i NAV-loven og
                            arbeidsmarkedsloven om arbeidsrettet oppfølging
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="who">
                        <Heading size="medium" level="2" spacing>
                            Hvem deles opplysningene med?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Arbeidsgivere på arbeidsplassen.no
                        </Heading>
                        <BodyLong>
                            Dersom NAV-medarbeidere finner en relevant stilling for deg, kan de spørre deg om de kan
                            dele din CV med denne arbeidsgiveren. Personopplysningene deles ikke med arbeidsgiveren før
                            du godtar dette, og du kan kontakte NAV når som helst for å be om at opplysningene ikke
                            lenger deles med arbeidsgiveren.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            CV-deling med den Europeiske Jobbmobilitetsportalen
                        </Heading>
                        <BodyLong spacing>
                            Dersom du ønsker kan du dele CV-en din med arbeidsgivere nasjonalt eller i EU/EØS og Sveits,
                            gjennom den den Europeiske Jobbmobilitetsportalen (EURES-portalen). EURES er også
                            behandlingsansvarlig ved slik deling.
                        </BodyLong>
                        <BodyLong>
                            Du velger selv hvilke opplysninger fra CV-en din som du ønsker å dele med den Europeiske
                            jobbmobilitetsportalen. Du kan når som helst endre eller slette hva du deler.
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
                            Du har rett til å få vite hvilke personopplysninger vi har om deg og be om retting av
                            uriktige opplysninger. Du kan logge deg inn på Min side på arbeidsplassen.no for å se mange
                            av opplysningene vi har registrert om deg. For innsyn i personopplysninger ut over dette, må
                            du{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-7">
                                ta kontakt med oss på nav.no.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
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

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Rett til begrensning av behandlingen
                        </Heading>
                        <BodyLong>
                            Du har rett til å be om at NAV midlertidig stopper behandlingen av dine opplysninger, dersom
                            du mener at opplysningene vi har om deg er feil eller du mener at vår behandling av
                            opplysningene er ulovlig. Det samme gjelder dersom du mener at vi ikke trenger
                            opplysningene.
                        </BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    )
}
