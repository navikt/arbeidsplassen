import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function vilkar() {
    return (
        <Layout>
            <Head>
                <title>Vilkår for å publisere stillinger - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <NextLink href="/vilkar-og-retningslinjer" passHref legacyBehavior>
                    <Link className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til Vilkår og retningslinjer
                    </Link>
                </NextLink>
                <Heading spacing size="xlarge" level="1">
                    Vilkår for å publisere stillinger
                </Heading>

                <Heading size="large" level="2" spacing>
                    Hvem kan bruke tjenestene
                </Heading>
                <BodyLong className="mb-3">
                    Arbeidsgiveren i en virksomhet gir tilganger til sine ansatte i Altinn. Har flere ansatte fått
                    tilgang til å publisere stillinger på Arbeidsplassen, kan de se og utføre det samme, også endre det
                    som en annen har lagt inn.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Bruk av opplysninger i CV-er
                </Heading>
                <BodyLong spacing>
                    Du kan kun bruke opplysninger i CV-er hvis målet er å bemanne, rekruttere eller oppfordre personer
                    til å søke på stillinger.
                </BodyLong>
                <BodyLong>Det er ikke tillatt å bruke CV-er til andre formål, slik som å</BodyLong>
                <ul>
                    <li>
                        <BodyLong>
                            bruke opplysninger i forbindelse med salg eller markedsføring av varer eller tjenester
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>tilby arbeidssøkere stillinger der arbeidssøkeren må betale for å søke</BodyLong>
                    </li>
                    <li>
                        <BodyLong>tilby personer arbeidstreningsplasser</BodyLong>
                    </li>
                </ul>
                <BodyLong className="mb-3">NAV vil følge opp brudd på disse vilkårene hvis det forekommer.</BodyLong>

                <Heading size="large" level="2" spacing>
                    Publisere stillinger
                </Heading>
                <BodyLong spacing>
                    Hvis du ønsker å annonsere ledige stillinger på Arbeidsplassen og{" "}
                    <Link href="https://eures.ec.europa.eu/index_en">Den Europeiske Jobbmobilitetsportalen</Link>, må du
                    som arbeidsgiver godta vilkårene under.
                </BodyLong>
                <BodyLong>
                    Stillingsannonsen blir synlig på Arbeidsplassen få minutter etter at du har sendt den til
                    publisering. NAV kontrollerer i etterkant og tar kontakt hvis annonsen bryter med vilkårene og
                    fjernes, slik at du kan rette opp og sende inn for godkjenning på nytt. Tjenesten er kostnadsfri.
                </BodyLong>
                <ul>
                    <li>
                        <BodyLong>
                            Du kan bare annonsere en ledig stilling på Arbeidsplassen når du vil tilby en kandidat
                            ansettelse.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Når du ansetter en person betyr det at du skal melde arbeidstakeren inn i Arbeidsgiver- og
                            arbeidstakerregisteret.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Du har ikke anledning til å publisere annonser til oppdrag for selvstendig næringsdrivende
                            eller ulike forretningskonsepter som for eksempel franchise, forhandler, agentur,
                            nettverkssalg og «homeparty».
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Du kan ikke bruke stillingsannonsen til salg eller markedsføring av varer, tjenester eller
                            lignende.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Hvis du vil tilby ansettelse, kan du ikke kreve noen form for avgift eller annen
                            godtgjørelse fra arbeidssøkeren.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Stillingsannonsen din skal gi arbeidssøkeren tilstrekkelig informasjon om virksomheten,
                            arbeidsoppgaver, godtgjørelse og ansettelsesforhold.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Stillingsannonsen skal ikke forskjellsbehandle ut fra kjønn, alder, etnisk bakgrunn eller
                            andre kriterier som ikke er relevante. Annonsen skal heller ikke ha uetisk innhold eller
                            kunne støte noen. Den skal ikke oppfordre til ulovlige handlinger eller være i strid med
                            norsk lov eller{" "}
                            <NextLink href="/retningslinjer-stillingsannonser" passHref legacyBehavior>
                                <Link>NAVs retningslinjer for stillingsannonser.</Link>
                            </NextLink>
                        </BodyLong>
                    </li>
                </ul>
                <BodyLong className="mb-3">
                    Hvis NAV oppdager en annonse som ikke fyller vilkårene når vi kontrollerer innholdet, eller etter at
                    annonsen er publisert, kan den bli slettet eller fjernet uten varsling. NAV vil ta kontakt og
                    informere i etterkant.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Personopplysninger
                </Heading>
                <BodyLong>
                    NAV er pålagt å drive en statlig arbeidsformidling og formidle arbeidskraft. For å kunne tilby disse
                    tjenestene til arbeidsgivere, må vi lagre nødvendige personopplysninger. Vi lagrer disse
                    opplysningene:
                </BodyLong>
                <ul>
                    <li>
                        <BodyLong>
                            Stillinger som virksomheten har publisert på Arbeidsplassen, herunder personopplysninger du
                            har oppgitt. Annonsene arkiveres og anonymiserte opplysninger brukes til statistiske formål.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            Kandidatlister som virksomheten har opprettet, og anonymiserte opplysninger fra disse. Denne
                            informasjonen bruker NAV til å forbedre tjenesten.
                        </BodyLong>
                    </li>
                </ul>
                <BodyLong spacing>
                    For mer informasjon,{" "}
                    <Link href="https://www.nav.no/personvernerklaering">se NAVs personvernerklæring.</Link>
                </BodyLong>
                <BodyLong>
                    Har du spørsmål, ta gjerne kontakt med oss:{" "}
                    <Link href="https://www.nav.no/arbeidsgiver/kontaktoss">Kontakt NAV – arbeidsgiver.</Link>
                </BodyLong>
            </article>
        </Layout>
    );
}
