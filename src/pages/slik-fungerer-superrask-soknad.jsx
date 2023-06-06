import { BodyLong, Button, Heading, Ingress, Stepper } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function slikFungererSuperraskSoknad() {
    return (
        <Layout>
            <Head>
                <title>Superrask søknad - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <div className="text-center">
                    <Heading spacing size="xlarge" level="1">
                        Superrask søknad
                    </Heading>
                    <Ingress spacing>Ny måte å motta søknader fra relevante jobbsøkere</Ingress>
                </div>

                <div className="stegindikator-container mb-3">
                    <Stepper interactive={false} orientation="horizontal" activeStep="">
                        <Stepper.Step>Opprett ny stillingsannonse</Stepper.Step>
                        <Stepper.Step>Motta og vurder søknader fortløpende</Stepper.Step>
                        <Stepper.Step>Ta kontakt med relevante jobbsøkere</Stepper.Step>
                    </Stepper>
                </div>
            </div>

            <div className="container-medium mb-6">
                <div className="guide-panel">
                    <div className="center mb-3">
                        <Heading size="large">Slik fungerer det</Heading>
                    </div>
                    <div className="mb-2">
                        <Heading size="small" level="3" spacing>
                            Velg superrask søknad i annonsen
                        </Heading>
                        <BodyLong spacing>
                            Velg superrask søknad når dere registrerer en stillingsannonse. Spesifiser hvilke
                            kvalifikasjoner dere har behov for.
                        </BodyLong>
                        <BodyLong spacing>
                            Jobbsøkerne svarer på hvilke kvalifikasjoner de oppfyller, og begrunner kort hvorfor de er
                            rett person for jobben.
                        </BodyLong>
                        <Heading size="small" level="3" spacing>
                            Motta og vurder søknadene
                        </Heading>
                        <BodyLong spacing>
                            Dere ser raskt om en søker er aktuell, og velger selv om dere vil ta kontakt eller ikke.
                            Dere har ikke inngått noen forpliktelser.
                        </BodyLong>
                        <Heading size="small" level="3" spacing>
                            Ta kontakt med kandidater
                        </Heading>
                        <BodyLong spacing>
                            Hvordan ønsker dere å ta praten videre med aktuelle kandidater? Kanskje et telefonintervju
                            eller kaffeprat? Dere får ikke tilsendt CV gjennom superrask søknad, så det avtaler dere
                            eventuelt i etterkant.
                        </BodyLong>
                        <BodyLong>
                            Opplysningene som jobbsøkeren har gitt, slettes automatisk 3 måneder etter at fristen i
                            stillingsannonsen har gått ut.{" "}
                        </BodyLong>
                    </div>
                    <div className="center">
                        <Button variant="primary" as="a" href="/stillingsregistrering/stillingsannonser">
                            Lag ny stillingsannonse
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
