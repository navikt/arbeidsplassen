import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function personvernSuperraskSoknad() {
    return (
        <Layout>
            <Head>
                <title>Personvernerklæring for superrask søknad - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <NextLink href="/personvern" passHref legacyBehavior>
                        <Link className="mb-2">
                            <ChevronLeftIcon aria-hidden="true" />
                            Til personvernerklæring
                        </Link>
                    </NextLink>

                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for superrask søknad
                    </Heading>
                    <BodyLong className="mb-2">Sist endret 16. januar 2023</BodyLong>

                    <BodyLong spacing>
                        Superrask søknad er en frivillig og selvbetjent tjeneste for deg som er jobbsøker.
                    </BodyLong>
                    <BodyLong spacing>
                        Superrask søknad er ment å forenkle prosessen med å skaffe arbeid for jobbsøkere, samt forenkle
                        arbeidsgivers prosess med å rekruttere arbeidskraft.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Arbeids- og velferdsdirektoratet har ansvaret for behandlingen av dine personopplysninger når du
                        sender inn en søknad gjennom tjenesten superrask søknad.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Innhold
                    </Heading>
                    <ul className="mb-3">
                        <li>
                            <BodyLong>
                                <Link href="#information">Hvilke personopplysninger behandler vi?</Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="#goals">Hvilke formål brukes personopplysningene til?</Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="#legal">
                                    Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                                </Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="#time">Hvor lenge lagrer vi dine personopplysninger?</Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="#who">Hvem kan få tilgang til dine personopplysninger?</Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="#rights">Hvilke rettigheter har du?</Link>
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing id="information">
                        Hvilke personopplysninger behandler vi?
                    </Heading>
                    <BodyLong spacing>
                        Når du bruker superrask søknad blir det behandlet personopplysninger om ditt navn, e-post,
                        telefonnummer, IP-adresse og opplysninger om din kompetanse. Med unntak av IP-adresse, er dette
                        personopplysninger du selv oppgir i tjenesten.
                    </BodyLong>
                    <BodyLong spacing>
                        Tjenesten krever ikke innlogging, og derfor blir det heller ikke innhentet personopplysninger
                        direkte fra Folkeregisteret.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Det blir ikke registrert i tjenesten om du er en frivillig jobbsøker, eller om du er en
                        jobbsøker under oppfølging hos NAV. Derfor vil personopplysninger knyttet til din bruk av
                        superrask søknad ikke dukke opp når du logger deg inn på nav.no.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="goals">
                        Hvilke formål brukes personopplysningene til?
                    </Heading>
                    <BodyLong spacing>
                        Formålet med behandlingen av personopplysninger i superrask søknad er å gjøre det enklere for
                        deg som er jobbsøker å skaffe arbeid.
                    </BodyLong>
                    <BodyLong spacing>
                        Personopplysningene behandles for å gi deg mulighet til å søke på ledige stillinger på en enkel
                        og rask måte. Ved å sende inn en superrask søknad kan du fortelle arbeidsgiver at du er
                        interessert i stillingen, samtidig som du kun avgir relevante og nødvendige opplysninger om din
                        kompetanse og kontaktinformasjon.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Arbeidsgiver får dermed kun tilgang til personopplysninger som er nødvendige og relevante, for å
                        kunne vurdere om du er aktuell for stillingen, og for å kunne kalle deg inn til intervju og
                        lignende.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="legal">
                        Rettslig grunnlag for behandlingen
                    </Heading>
                    <BodyLong className="mb-3">
                        Det rettslige grunnlaget for behandling av personopplysninger i superrask søknad er
                        Personvernforordningen (GDPR) artikkel 6 nr. 1 bokstav e, og lov om arbeids- og
                        velferdsforvaltningen (NAV-loven) § 4. Behandlingen av personopplysninger er nødvendig for å
                        oppfylle NAVs oppgave med å bistå arbeidssøkere med å få jobb, og bistå arbeidsgivere med å
                        skaffe arbeidskraft.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="time">
                        Hvor lenge lagres opplysningene?
                    </Heading>
                    <BodyLong className="mb-3">
                        Dine personopplysninger lagres i tre måneder regnet fra stillingsannonsens utløpsdato.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="who">
                        Hvem kan få tilgang til dine personopplysninger?
                    </Heading>
                    <BodyLong spacing>
                        Arbeidsgivere du sender inn superrask søknad til, får tilgang til personopplysninger som navn,
                        e-post, telefonnummer og kompetanser, som du selv registrerer ved innsending av søknaden.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        NAV-ansatte, for eksempel utviklere, kan ved tjenstlig behov få tilgang til dine
                        personopplysninger.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="rights">
                        Hvilke rettigheter har du?
                    </Heading>

                    <Heading size="small" level="3" spacing>
                        Rett til informasjon
                    </Heading>
                    <BodyLong spacing>
                        Du har rett til å få informasjon om hvordan dine personopplysninger blir behandlet. Din rett til
                        informasjon om behandlingen ivaretas av denne personvernerklæringen.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Rett til innsyn
                    </Heading>
                    <BodyLong spacing>
                        Du har rett til å få innsyn i hvilke personopplysninger vi har om deg. Du kan be om innsyn i
                        hvilke personopplysninger som blir registrert om deg når du bruker tjenesten superrask søknad.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Rett til retting
                    </Heading>
                    <BodyLong spacing>
                        Du kan be om at opplysninger om deg blir rettet hvis opplysningene er feil eller misvisende. Det
                        er viktig at opplysninger vi har om deg er riktige og oppdaterte, for blant annet å sikre at
                        søknaden din blir riktig behandlet. Du kan ikke rette opp allerede innsendt søknad, men du kan
                        trekke tilbake den du har sendt inn, og sende en ny søknad hvis ønskelig.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Rett til sletting
                    </Heading>
                    <BodyLong spacing>
                        Du kan ha rett til å få slettet opplysninger om deg. For at NAV skal kunne slette
                        personopplysninger om deg, forutsetter det at vi ikke har en lovpålagt plikt etter arkivloven,
                        eller annen lovgivning til å lagre opplysningene. Du kan selv slette en superrask søknad, ved å
                        bruke lenken du får tilsendt per e-post etter innsending av søknad. Dersom du velger å slette
                        søknaden, vil din søknad også bli slettet fra arbeidsgivers liste.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Rett til begrensning av behandlingen
                    </Heading>
                    <BodyLong spacing>
                        Du kan be om at NAV midlertidig stopper behandlingen av dine opplysninger, dersom du mener at
                        opplysningene vi har om deg er feil, eller om du mener behandlingen er ulovlig. Det samme
                        gjelder dersom du mener at vi ikke trenger opplysningene. Når opplysningene blir begrenset, vil
                        de fortsatt bli lagret, men muligheten til å bruke personopplysningene blir begrenset.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Rett til å protestere mot behandlingen
                    </Heading>
                    <BodyLong spacing>
                        Du kan i enkelte tilfeller ha rett til å protestere mot vår behandling av dine
                        personopplysninger. Dersom vilkårene for å protestere mot behandlingen er oppfylt, vil NAV
                        stanse behandlingen, og opplysningene vil eventuelt bli slettet.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
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
                        Personvernombudet i NAV kan gi deg råd og veiledning om hvordan vi behandler personopplysninger,
                        og hjelpe deg med å ivareta dine personverninteresser.
                    </BodyLong>
                    <BodyLong spacing>
                        <Link href="https://www.nav.no/personvernombudet">Kontakt personvernombudet</Link>
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Du kan klage til Datatilsynet
                    </Heading>
                    <BodyLong spacing>
                        Du har rett til å klage til Datatilsynet hvis du mener måten vi behandler personopplysninger på
                        er i strid med personvernreglene.
                    </BodyLong>
                    <BodyLong>
                        <Link href="https://www.datatilsynet.no/om-datatilsynet/kontakt-oss/klage-til-datatilsynet/">
                            Klage til Datatilsynet
                        </Link>
                    </BodyLong>
                </div>
            </div>
        </Layout>
    );
}
