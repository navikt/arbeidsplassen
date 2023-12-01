import { BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function vilkarApi() {
    return (
        <Layout variant="company">
            <Head>
                <title>Avtale om deling av jobbannonser fra NAV til ekstern konsument</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <NextLink href="/vilkar-og-retningslinjer" passHref legacyBehavior>
                    <DsLink className="mb-8">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til Vilkår og retningslinjer
                    </DsLink>
                </NextLink>

                <Heading spacing size="xlarge" level="1">
                    Avtale om deling av jobbannonser fra NAV til ekstern konsument
                </Heading>

                <Heading size="large" level="2" spacing>
                    1. Avtalens parter
                </Heading>
                <BodyLong spacing>
                    Denne avtalen er mellom Arbeids- og velferdsdirektoratet («NAV») og virksomheter eller aktører som
                    leverer eller på andre måter jobber med tjenester innen formidling, rekruttering, analyse og
                    utdanning.
                </BodyLong>
                <BodyLong className="mb-12">
                    Virksomheten eller aktøren som er en konsument av jobbannonser fra NAV, blir heretter omtalt som
                    “konsument” («navn»). Konsumenten og NAV er heretter benevnt hver for seg, som Part eller sammen som
                    Partene.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    2. Bakgrunn for avtalen
                </Heading>
                <BodyLong classname="mb-12" spacing>
                    Som en offentlig aktør skal NAV tilrettelegge for gjenbruk og viderebruk av informasjon. Informasjon
                    om aktive stillingsannonser kan ikke deles helt ukritisk, da det mange berørte arbeidsgivere knyttet
                    til alle jobbannonsene, derfor er en avtale om datadeling nødvendig.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    3. Deling av jobbannonser fra nav til konsument
                </Heading>
                <BodyLong spacing>
                    Det går frem av Digitaliseringsrundskrivet at offentlige virksomheter skal tilrettelegge for
                    gjenbruk og viderebruk av informasjon.
                </BodyLong>
                <BodyLong spacing>
                    NAV tilbyr derfor et API med offentlige utlyste stillinger fra NAVs database. Dette kan være
                    jobbannonser direkte registrert hos NAV eller hentet inn fra NAVs samarbeidspartnere (omtalt som
                    systemleverandør i punkt 4)
                </BodyLong>
                <BodyLong classname="mb-12" spacing>
                    Konsumenter kan koble seg til APIet og hente disse jobbannonsene.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    4. Bruk og behandling av jobbannonser
                </Heading>
                <BodyLong spacing>
                    Konsument har rett til å republisere og vise mottatte jobbannonser på sine tjenester, og/eller bruke
                    de til statistiske/analytiske formål.
                </BodyLong>
                <BodyLong>Konsument forplikter seg til at:</BodyLong>
                <ol type="a" className="mb-12">
                    <li>
                        <BodyLong spacing>
                            Alle annonser som er hentet fra NAV og republisert hos Konsuments tjenester skal umiddelbart
                            fjernes fra resultatlisten til Konsumenten når annonsen blir inaktiv eller slettet hos NAV.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            Når en annonse åpnes fra resultatlisten, kan annonsen vises på samme domene som
                            resultatlisten. Det betyr at en annonse hentet fra NAV kan åpnes av jobbsøker på
                            Konsumentens tjenester.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Jobbannonsens «søknadsfunksjon» skal dyplenke direkte til systemleverandørs søknadsfunksjon
                            når den åpnes av en jobbsøker. Det betyr for eksempel at når en jobbsøker trykker på «søk på
                            stillingen» i annonsevisningen på Finn.no, skal jobbsøker lenkes videre til kilden for
                            søknadsfunksjonen.
                        </BodyLong>
                    </li>
                </ol>

                <Heading size="large" level="2" spacing>
                    5. Endring av teknisk karakter
                </Heading>
                <BodyLong classname="mb-12" spacing>
                    Ved endring av teknisk karakter, som for eksempel endrede IP-adresser, skal begge parter gjensidig
                    varsle hverandre omgående når det er kjent at endringen trer i kraft.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    6. Varighet og oppsigelse
                </Heading>
                <BodyLong classname="mb-12" spacing>
                    Avtalen er tidsubestemt, men hver av Partene kan fritt si opp avtalen med 30 dagers varsel.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    7. Behandling av personopplysninger
                </Heading>
                <BodyLong spacing>
                    Partene skal opptre som separate behandlingsansvarlige når det gjelder behandlingen av
                    personopplysninger i forbindelse med samarbeidet regulert av denne avtalen. Konsument vil motta
                    personopplysninger som inngår i jobbannonsene som NAV deler med Konsument under denne avtalen.
                    Konsument forplikter seg til å behandle personopplysninger i henhold til gjeldende lover, inkludert
                    personopplysningsloven (LOV-2018-06-15-38). Konsument sine forpliktelser inkluderer, men er ikke
                    begrenset til, følgende:
                </BodyLong>
                <ol className="mb-12">
                    <li>
                        <BodyLong spacing>
                            Sørge for at Konsument behandler personopplysninger i henhold til gjeldende lover, inkludert
                            å sørge for lovlig behandlingsgrunnlag for innsamling av personopplysninger, og behandlingen
                            av personopplysninger forøvrig, under denne avtalen;
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            sørge for informasjon om deling av annonser som inneholder personopplysninger og overholde
                            informasjonskravet i personopplysningsloven for øvrig;
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            sørge for begrensninger i lagringstiden til personopplysninger slik at personopplysninger
                            slettes så snart personopplysningene ikke lenger er nødvendige for det opprinnelige formålet
                            med behandlingen eller øvrige formål, og i henhold til informasjonen som er gitt til de
                            registrerte om formål og lagringstider; og
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            håndheve de registrertes rettigheter, inkludert men ikke begrenset til å besvare
                            henvendelser fra de registrerte om innsyn og sletting i henhold til personopplysningsloven.
                        </BodyLong>
                    </li>
                </ol>

                <Heading size="large" level="2" spacing>
                    8. Overdragelse
                </Heading>
                <BodyLong classname="mb-12" spacing>
                    En Part har ikke rett til å overdra sine rettigheter eller plikter etter denne avtalen til en
                    tredjepart uten den annen Parts skriftlige forhåndssamtykke. Konsumenten har dog rett til å overdra
                    sine rettigheter og plikter etter avtalen til andre selskaper i samme konsern.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    9. Tvisteløsning
                </Heading>
                <BodyLong classname="mb-12" spacing>
                    Enhver uenighet mellom partene i tilknytning til denne avtale skal først søkes løst ved
                    forhandlinger. Tvister som oppstår i forbindelse med gjennomføring og tolkning av denne avtale som
                    ikke løses i minnelighet, skal bringes inn for de ordinære domstoler med Oslo Tingrett som rett
                    verneting.
                </BodyLong>
            </article>
        </Layout>
    );
}
