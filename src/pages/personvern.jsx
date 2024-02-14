import { BodyLong, Heading, Link as AkselLink, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";

export default function personvern() {
    return (
        <Layout>
            <Head>
                <title>Personvernerklæring for arbeidsplassen.no - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Personvernerklæring for arbeidsplassen.no
                </Heading>
                <BodyLong className="mb-8">Publisert 1. februar 2022</BodyLong>

                <BodyLong spacing>
                    Arbeidsplassen.no er en tjeneste fra NAV og det er Arbeids- og velferdsdirektoratet som er
                    behandlingsansvarlig for dine data her. Denne personvernerklæringen er knyttet til behandlingen av
                    personopplysninger særskilt for tjenestene på arbeidsplassen.no.
                </BodyLong>
                <BodyLong spacing>
                    Vi lagrer kun personopplysninger i de innloggede tjenestene og ved innhenting av stillingsannonser
                    fra arbeidsgivere via våre samarbeidspartnere. For utfyllende informasjon om hvordan NAV behandler
                    dine personopplysninger, kan du lese mer i{" "}
                    <AkselLink href="https://www.nav.no/personvernerklaering">
                        NAVs generelle personvernerklæring.
                    </AkselLink>
                </BodyLong>
                <BodyLong spacing>
                    For deg som representerer en arbeidsgiver, les mer lenger nede på siden om hvordan vi behandler dine
                    personopplysninger i løsningen.
                </BodyLong>
                <BodyLong className="mb-12">
                    <NextLink href="/personvern-superrask-soknad" passHref legacyBehavior>
                        <AkselLink>
                            Informasjon om hvordan vi behandler dine data knyttet til superrask søknad.
                        </AkselLink>
                    </NextLink>
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Informasjonskapsler
                </Heading>
                <BodyLong className="mb-12">
                    Arbeidsplassen.no er et subdomene av nav.no. Vi lagrer ikke personopplysninger om deg på de
                    åpne/uinnloggede sidene på arbeidsplassen.nav.no, men bruker informasjonskapsler («cookies»).{" "}
                    <AkselLink href="https://www.nav.no/personvern-sikkerhet-navno">
                        Les mer om informasjonskapsler og innloggede tjenester på nav.no.
                    </AkselLink>
                </BodyLong>

                <Heading className="mb-8" size="large" level="2">
                    Les mer om hvordan vi behandler dine personopplysninger
                </Heading>
                <NextLink href="/personvern-under-oppfolging" passHref legacyBehavior>
                    <LinkPanel className="arb-link-panel-tertiary mb-4">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            For deg som er under arbeidsrettet oppfølging fra NAV
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Dersom du har registrert deg som arbeidssøker hos NAV, gjelder dette deg.
                        </LinkPanel.Description>
                    </LinkPanel>
                </NextLink>
                <NextLink href="/personvern-ikke-under-oppfolging" passHref legacyBehavior>
                    <LinkPanel className="arb-link-panel-tertiary mb-4">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            For deg som ikke er under arbeidsrettet oppfølging fra NAV
                        </LinkPanel.Title>
                    </LinkPanel>
                </NextLink>
                <NextLink href="/personvern-arbeidsgiver" passHref legacyBehavior>
                    <LinkPanel className="arb-link-panel-tertiary">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            For deg som representerer en arbeidsgiver
                        </LinkPanel.Title>
                    </LinkPanel>
                </NextLink>
            </article>
        </Layout>
    );
}
