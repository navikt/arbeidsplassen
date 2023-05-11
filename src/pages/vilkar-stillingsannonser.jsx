import { BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function retningslinjerStillingsannonser() {
    return (
        <Layout>
            <Head>
                <title>Vilkår for å publisere stillingsannonser - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <NextLink href="/vilkar-og-retningslinjer" passHref legacyBehavior>
                    <DsLink className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til Vilkår og retningslinjer
                    </DsLink>
                </NextLink>

                <Heading spacing size="xlarge" level="1">
                    Vilkår for å publisere stillingsannonser på arbeidsplassen.no
                </Heading>

                <BodyLong spacing>
                    Hvis du ønsker å annonsere ledige stillinger på arbeidsplassen.no og{" "}
                    <NextLink href="https://eures.ec.europa.eu/index_en" passHref legacyBehavior>
                        <DsLink>Den Europeiske Jobbmobilitetsportalen</DsLink>
                    </NextLink>
                    {", "}
                    må du som arbeidsgiver godta vilkårene under.
                </BodyLong>
                <BodyLong spacing>
                    Stillingsannonsen blir synlig på arbeidsplassen.no få minutter etter at du har sendt den til
                    publisering. NAV kontrollerer i etterkant og tar kontakt hvis annonsen bryter med vilkårene og
                    fjernes, slik at du kan rette opp og sende inn for godkjenning på nytt. Alle stillinger publisert på
                    arbeidsplassen.no, blir også delt med Den Europeiske Jobbmobilitetsportalen (EURES-portalen), og et
                    tilgjengelig i åpent API for stillinger.
                </BodyLong>
                <BodyLong>Tjenesten er kostnadsfri.</BodyLong>
                <ul>
                    <li>
                        <BodyLong>
                            Du kan bare annonsere en ledig stilling på arbeidsplassen.no når du vil tilby en kandidat
                            ansettelse.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Du har ikke anledning til å publisere annonser til oppdrag for selvstendig næringsdrivende
                            eller ulike forretningskonsepter som for eksempel franchise, forhandler, agentur,
                            nettverkssalg og «homeparty».{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Du kan ikke bruke stillingsannonsen til salg eller markedsføring av varer, tjenester eller
                            lignende.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Hvis du vil tilby ansettelse, kan du ikke kreve noen form for avgift eller annen
                            godtgjørelse fra arbeidssøkeren.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Stillingsannonsen din skal gi arbeidssøkeren tilstrekkelig informasjon om virksomheten,
                            arbeidsoppgaver, godtgjørelse og ansettelsesforhold.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Stillingsannonsen skal ikke forskjellsbehandle ut fra kjønn, alder, etnisk bakgrunn eller
                            andre kriterier som ikke er relevante. Annonsen skal heller ikke ha uetisk innhold eller
                            være støtende. Den skal ikke oppfordre til ulovlige handlinger eller være i strid med norsk
                            lov eller{" "}
                            <NextLink href="/retningslinjer-stillingsannonser" passHref legacyBehavior>
                                <DsLink>NAVs retningslinjer for innhold i stillingsannonser.</DsLink>
                            </NextLink>{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Stillingsannonsen skal i utgangspunktet kun publiseres èn gang. Hyppige endringer av
                            annonsen med det formål å komme høyere opp i stillingssøket er ikke tillatt.{" "}
                        </BodyLong>
                    </li>
                </ul>
                <BodyLong className="mb-3">
                    Hvis NAV oppdager en annonse som ikke oppfyller vilkårene, kan den bli slettet eller fjernet uten
                    varsling. NAV vil ta kontakt og informere i etterkant.
                </BodyLong>

                <Heading size="medium" level="3" spacing>
                    Personopplysninger
                </Heading>
                <BodyLong>
                    NAV er pålagt å drive en statlig arbeidsformidling og formidle arbeidskraft. For å kunne tilby disse
                    tjenestene til arbeidsgivere, må vi lagre nødvendige personopplysninger tilknyttet hvem som lager
                    stillingsannonsen, og kontaktperson til stillingen. Vi lagrer disse opplysningene:
                </BodyLong>
                <ul>
                    <li>
                        <BodyLong>
                            Stillinger som virksomheten har publisert på arbeidsplassen.no, herunder personopplysninger
                            du har oppgitt. Annonsene arkiveres og anonymiserte opplysninger brukes til statistiske
                            formål.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Så lenge stillingsannonsen er aktiv, blir den delt i et åpent API som tredjeparter kan
                            benytte seg av, for eksempel rekrutterings- og bemanningsbransjen.{" "}
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Informasjon om hvem i virksomheten som registrerer og redigerer annonsen </BodyLong>
                    </li>
                </ul>
                <BodyLong spacing>
                    For mer informasjon,{" "}
                    <NextLink href="/arbeidsgivertjenester " passHref legacyBehavior>
                        <DsLink>se NAVs personvernerklæring.</DsLink>
                    </NextLink>
                </BodyLong>
                <BodyLong className="mb-6">
                    Har du spørsmål, ta gjerne kontakt med oss:{" "}
                    <NextLink href="https://www.nav.no/arbeidsgiver/kontaktoss" passHref legacyBehavior>
                        <DsLink>Kontakt NAV - arbeidsgiver</DsLink>
                    </NextLink>
                </BodyLong>
            </article>
        </Layout>
    );
}
