import { BodyLong, Heading, Ingress } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";

export default function SuperraskSoknadBedrift() {
    return (
        <Layout>
            <Head>
                <title>
                    Superrask søknad – en enklere måte å komme i kontakt med relevante jobbsøkere - arbeidsplassen.no
                </title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Heading size="xlarge" level="1" spacing>
                        Superrask søknad – en enklere måte å komme i kontakt med relevante jobbsøkere
                    </Heading>

                    <Ingress spacing>
                        Superrask søknad er en ny tjeneste på arbeidsplassen.no som vil gjøre rekrutteringen enklere for
                        bedrifter og for de som er på jakt etter ny jobb.
                    </Ingress>

                    <div className="mb-3">
                        <Image
                            src="/images/bedrift.jpg"
                            alt="En mann sitter på et kontor og tar en annen i hånden"
                            width={578}
                            height={379}
                        />
                    </div>

                    <BodyLong spacing>
                        Arbeidplassen.no er en åpen møteplass for alle på arbeidsmarkedet, eid av NAV. Vårt mål er at
                        bedrifter og jobbsøkere skal finne hverandre, enkelt og effektivt.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Produktleder for arbeidsplassen.no, Marianne Garmann Ullsand, er veldig fornøyd med at superrask
                        søknad er på plass. – Ved å velge superrask søknad på arbeidsplassen.no håper vi at bedrifter
                        kan spare verdifull tid når de skal ansette nye medarbeidere. Det blir også enklere for
                        jobbsøker å vise at de er interessert i jobben. Vi tror derfor at superrask søknad vil bidra til
                        at bedriftene får større og raskere respons på sine ledige stillinger, sier hun.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Dette er superrask søknad
                    </Heading>

                    <Heading size="medium" level="3" spacing>
                        Velg superrask søknad i annonsen
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>
                                Velg superrask søknad når dere registrerer en stillingsannonse. Spesifiser hvilke
                                kvalifikasjoner dere har behov for, få med må-krav om dere har det.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong spacing>
                                Jobbsøkerne svarer på hvilke kvalifikasjoner de mener de oppfyller, og begrunner kort
                                hvorfor de er rett person for jobben.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="medium" level="3" spacing>
                        Motta og vurder søknadene
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>
                                Dere ser raskt om en søker er aktuell, og velger om dere vil ta kontakt eller ikke. Dere
                                har ikke inngått noen forpliktelser.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                I listen med søknader vises ikke navnene i utgangspunktet, men dere kan velge å se
                                navnet hvis dere ønsker. Det er frivillig for jobbsøker å legge inn navn.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Om dere synes at søkeren er aktuell kan dere velge å få tilgang til
                                kontaktinformasjonen. Jobbsøkeren får e-post om at dere er interessert og sannsynligvis
                                kommer til å ta kontakt.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong spacing>
                                Dersom dere ikke synes at en jobbsøker passer for stillingen, kan dere enkelt gi beskjed
                                om dette. Søknaden vil da slettes fra listen og jobbsøkeren får automatisk et vennlig
                                avslag på sin e-post med arbeidsplassen.no som avsender.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="medium" level="3" spacing>
                        Ta kontakt med jobbsøkere
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong spacing>
                                Hvordan ønsker dere å gå videre med aktuelle jobbsøkere? Dere styrer prosessen videre,
                                om dere ønsker et telefonintervju, kaffeprat eller hva dere erfarer fungerer for dere.
                            </BodyLong>
                        </li>
                    </ul>

                    <BodyLong spacing>
                        Opplysningene som jobbsøkeren har gitt, slettes automatisk 3 måneder etter at fristen i
                        stillingsannonsen har gått ut.
                    </BodyLong>
                    <BodyLong spacing>
                        Superrask søknad er en ny løsning for bedrifter som registrerer stillinger på arbeidsplassen.no.
                        Tjenesten er under utvikling og vi vil gjerne ha tilbakemelding på hvordan den fungerer.
                    </BodyLong>
                    <BodyLong>Lykke til med å finne deres neste medarbeider med superrask søknad!</BodyLong>
                </div>
            </div>
        </Layout>
    );
}
