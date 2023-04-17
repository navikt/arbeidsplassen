import { BodyLong, Heading, Link, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function personvern() {
    return (
        <Layout>
            <Head>
                <title>Personvernerklæring for arbeidsplassen.no - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Link href="/" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til forsiden
                    </Link>

                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for arbeidsplassen.no
                    </Heading>
                    <BodyLong className="mb-2">Publisert 1. februar 2022</BodyLong>

                    <BodyLong spacing>
                        Arbeidsplassen.no er en tjeneste fra NAV og det er Arbeids- og velferdsdirektoratet som er
                        behandlingsansvarlig for dine data her. Denne personvernerklæringen er knyttet til behandlingen
                        av personopplysninger særskilt for tjenestene på arbeidsplassen.no.
                    </BodyLong>
                    <BodyLong spacing>
                        Vi lagrer kun personopplysninger i de innloggede tjenestene og ved innhenting av
                        stillingsannonser fra arbeidsgivere via våre samarbeidspartnere. For utfyllende informasjon om
                        hvordan NAV behandler dine personopplysninger, kan du lese mer i{" "}
                        <Link href="https://www.nav.no/personvernerklaering">NAVs generelle personvernerklæring.</Link>
                    </BodyLong>
                    <BodyLong spacing>
                        For deg som representerer en arbeidsgiver, les mer lenger nede på siden om hvordan vi behandler
                        dine personopplysninger i løsningen.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        <NextLink href="/personvern-superrask-soknad" passHref legacyBehavior>
                            <Link>Informasjon om hvordan vi behandler dine data knyttet til superrask søknad.</Link>
                        </NextLink>
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Informasjonskapsler
                    </Heading>
                    <BodyLong className="mb-3">
                        Arbeidsplassen.no er et subdomene av nav.no. Vi lagrer ikke personopplysninger om deg på de
                        åpne/uinnloggede sidene på arbeidsplassen.nav.no, men bruker informasjonskapsler («cookies»).{" "}
                        <Link href="https://www.nav.no/personvern-sikkerhet-navno">
                            Les mer om informasjonskapsler og innloggede tjenester på nav.no.
                        </Link>
                    </BodyLong>

                    <Heading className="mb-2" size="large" level="2">
                        Les mer om hvordan vi behandler dine personopplysninger
                    </Heading>
                    <NextLink href="/personvern-under-oppfolging" passHref legacyBehavior>
                        <LinkPanel className="arb-link-panel arb-tertiary-bg-text mb-1">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                For deg som er under arbeidsrettet oppfølging fra NAV
                            </LinkPanel.Title>
                            <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                Dersom du har registrert deg som arbeidssøker hos NAV, gjelder dette deg.
                            </LinkPanel.Description>
                        </LinkPanel>
                    </NextLink>
                    <NextLink href="/personvern-ikke-under-oppfolging" passHref legacyBehavior>
                        <LinkPanel className="arb-link-panel arb-tertiary-bg-text mb-1">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                For deg som ikke er under arbeidsrettet oppfølging fra NAV
                            </LinkPanel.Title>
                        </LinkPanel>
                    </NextLink>
                    <NextLink href="/personvern-arbeidsgiver" passHref legacyBehavior>
                        <LinkPanel className="arb-link-panel arb-tertiary-bg-text">
                            <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                For deg som representerer en arbeidsgiver
                            </LinkPanel.Title>
                        </LinkPanel>
                    </NextLink>
                </div>
            </div>
        </Layout>
    );
}
