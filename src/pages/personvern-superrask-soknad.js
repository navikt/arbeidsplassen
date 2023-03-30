import { BodyLong, Heading, Link } from "@navikt/ds-react"
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles"

export default function personvernSuperraskSoknad() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/articles">Tilbake</Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for superrask søknad
                    </Heading>
                    <BodyLong className="mb-4">Sist endret 16. januar 2023</BodyLong>

                    <section className="arb-article-section">
                        <BodyLong spacing>
                            Superrask søknad er en frivillig og selvbetjent tjeneste for deg som er jobbsøker.
                        </BodyLong>
                        <BodyLong spacing>
                            Superrask søknad er ment å forenkle prosessen med å skaffe arbeid for jobbsøkere, samt
                            forenkle arbeidsgivers prosess med å rekruttere arbeidskraft.
                        </BodyLong>
                        <BodyLong>
                            Arbeids- og velferdsdirektoratet har ansvaret for behandlingen av dine personopplysninger
                            når du sender inn en søknad gjennom tjenesten superrask søknad.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Innhold
                        </Heading>
                        <ul>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#information">Hvilke personopplysninger behandler vi?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#goals">Hvilke formål brukes personopplysningene til?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#legal">
                                        Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                                    </Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#time">Hvor lenge lagrer vi dine personopplysninger?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#who">Hvem kan få tilgang til dine personopplysninger?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="@/src/pages/personvern-superrask-soknad#rights">Hvilke rettigheter har du?</Link>
                                </BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-section" id="information">
                        <Heading size="medium" level="2" spacing>
                            Hvilke personopplysninger behandler vi?
                        </Heading>
                        <BodyLong spacing>
                            Når du bruker superrask søknad blir det behandlet personopplysninger om ditt navn, e-post,
                            telefonnummer, IP-adresse og opplysninger om din kompetanse. Med unntak av IP-adresse, er
                            dette personopplysninger du selv oppgir i tjenesten.
                        </BodyLong>
                        <BodyLong spacing>
                            Tjenesten krever ikke innlogging, og derfor blir det heller ikke innhentet
                            personopplysninger direkte fra Folkeregisteret.
                        </BodyLong>
                        <BodyLong>
                            Det blir ikke registrert i tjenesten om du er en frivillig jobbsøker, eller om du er en
                            jobbsøker under oppfølging hos NAV. Derfor vil personopplysninger knyttet til din bruk av
                            superrask søknad ikke dukke opp når du logger deg inn på nav.no.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="goals">
                        <Heading size="medium" level="2" spacing>
                            Hvilke formål brukes personopplysningene til?
                        </Heading>
                        <BodyLong spacing>
                            Formålet med behandlingen av personopplysninger i superrask søknad er å gjøre det enklere
                            for deg som er jobbsøker å skaffe arbeid.
                        </BodyLong>
                        <BodyLong spacing>
                            Personopplysningene behandles for å gi deg mulighet til å søke på ledige stillinger på en
                            enkel og rask måte. Ved å sende inn en superrask søknad kan du fortelle arbeidsgiver at du
                            er interessert i stillingen, samtidig som du kun avgir relevante og nødvendige opplysninger
                            om din kompetanse og kontaktinformasjon.
                        </BodyLong>
                        <BodyLong>
                            Arbeidsgiver får dermed kun tilgang til personopplysninger som er nødvendige og relevante,
                            for å kunne vurdere om du er aktuell for stillingen, og for å kunne kalle deg inn til
                            intervju og lignende.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="legal">
                        <Heading size="medium" level="2" spacing>
                            Rettslig grunnlag for behandlingen
                        </Heading>
                        <BodyLong>
                            Det rettslige grunnlaget for behandling av personopplysninger i superrask søknad er
                            Personvernforordningen (GDPR) artikkel 6 nr. 1 bokstav e, og lov om arbeids- og
                            velferdsforvaltningen (NAV-loven) § 4. Behandlingen av personopplysninger er nødvendig for å
                            oppfylle NAVs oppgave med å bistå arbeidssøkere med å få jobb, og bistå arbeidsgivere med å
                            skaffe arbeidskraft.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="time">
                        <Heading size="medium" level="2" spacing>
                            Hvor lenge lagres opplysningene?
                        </Heading>
                        <BodyLong>
                            Dine personopplysninger lagres i tre måneder regnet fra stillingsannonsens utløpsdato.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="who">
                        <Heading size="medium" level="2" spacing>
                            Hvem kan få tilgang til dine personopplysninger?
                        </Heading>
                        <BodyLong spacing>
                            Arbeidsgivere du sender inn superrask søknad til, får tilgang til personopplysninger som
                            navn, e-post, telefonnummer og kompetanser, som du selv registrerer ved innsending av
                            søknaden.
                        </BodyLong>
                        <BodyLong>
                            NAV-ansatte, for eksempel utviklere, kan ved tjenstlig behov få tilgang til dine
                            personopplysninger.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="rights">
                        <Heading size="medium" level="2" spacing>
                            Hvilke rettigheter har du?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til informasjon
                        </Heading>
                        <BodyLong>
                            Du har rett til å få informasjon om hvordan dine personopplysninger blir behandlet. Din rett
                            til informasjon om behandlingen ivaretas av denne personvernerklæringen.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til innsyn
                        </Heading>
                        <BodyLong>
                            Du har rett til å få innsyn i hvilke personopplysninger vi har om deg. Du kan be om innsyn i
                            hvilke personopplysninger som blir registrert om deg når du bruker tjenesten superrask
                            søknad.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til retting
                        </Heading>
                        <BodyLong>
                            Du kan be om at opplysninger om deg blir rettet hvis opplysningene er feil eller misvisende.
                            Det er viktig at opplysninger vi har om deg er riktige og oppdaterte, for blant annet å
                            sikre at søknaden din blir riktig behandlet. Du kan ikke rette opp allerede innsendt søknad,
                            men du kan trekke tilbake den du har sendt inn, og sende en ny søknad hvis ønskelig.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til sletting
                        </Heading>
                        <BodyLong>
                            Du kan ha rett til å få slettet opplysninger om deg. For at NAV skal kunne slette
                            personopplysninger om deg, forutsetter det at vi ikke har en lovpålagt plikt etter
                            arkivloven, eller annen lovgivning til å lagre opplysningene. Du kan selv slette en
                            superrask søknad, ved å bruke lenken du får tilsendt per e-post etter innsending av søknad.
                            Dersom du velger å slette søknaden, vil din søknad også bli slettet fra arbeidsgivers liste.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til begrensning av behandlingen
                        </Heading>
                        <BodyLong>
                            Du kan be om at NAV midlertidig stopper behandlingen av dine opplysninger, dersom du mener
                            at opplysningene vi har om deg er feil, eller om du mener behandlingen er ulovlig. Det samme
                            gjelder dersom du mener at vi ikke trenger opplysningene. Når opplysningene blir begrenset,
                            vil de fortsatt bli lagret, men muligheten til å bruke personopplysningene blir begrenset.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til å protestere mot behandlingen
                        </Heading>
                        <BodyLong>
                            Du kan i enkelte tilfeller ha rett til å protestere mot vår behandling av dine
                            personopplysninger. Dersom vilkårene for å protestere mot behandlingen er oppfylt, vil NAV
                            stanse behandlingen, og opplysningene vil eventuelt bli slettet.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Kontakt oss hvis du har spørsmål
                        </Heading>
                        <BodyLong spacing>
                            Dersom du har spørsmål om rettighetene dine eller har flere spørsmål om personvern, kan du
                            kontakte oss.
                        </BodyLong>
                        <BodyLong spacing>
                            Du kan kontakte oss ved å ringe 55 55 33 33, eller logge inn på nav.no og bruke tjenesten{" "}
                            <Link href="https://www.nav.no/skriv-til-oss">Skriv til oss</Link> om du foretrekker det.
                        </BodyLong>
                        <BodyLong spacing>
                            Vi skal besvare henvendelser om personopplysninger fra deg kostnadsfritt og senest innen 30
                            dager.
                        </BodyLong>
                        <BodyLong spacing>
                            Personvernombudet i NAV kan gi deg råd og veiledning om hvordan vi behandler
                            personopplysninger, og hjelpe deg med å ivareta dine personverninteresser.
                        </BodyLong>
                        <BodyLong>
                            <Link href="https://www.nav.no/personvernombudet">Kontakt personvernombudet</Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Du kan klage til Datatilsynet
                        </Heading>
                        <BodyLong spacing>
                            Du har rett til å klage til Datatilsynet hvis du mener måten vi behandler personopplysninger
                            på er i strid med personvernreglene.
                        </BodyLong>
                        <BodyLong>
                            <Link href="https://www.datatilsynet.no/om-datatilsynet/kontakt-oss/klage-til-datatilsynet/">
                                Klage til Datatilsynet
                            </Link>
                        </BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    )
}
