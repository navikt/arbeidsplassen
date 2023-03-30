import { BodyLong, Heading, Link, LinkPanel } from "@navikt/ds-react";
import LayoutArticles from "@/pages/components/layouts/LayoutArticles";

export default function personvern() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/">Til forsiden</Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for arbeidsplassen.no
                    </Heading>
                    <BodyLong className="mb-4">Publisert 1. februar 2022</BodyLong>

                    <section className="arb-article-section">
                        <BodyLong spacing>
                            Arbeidsplassen.no er en tjeneste fra NAV og det er Arbeids- og velferdsdirektoratet som er
                            behandlingsansvarlig for dine data her. Denne personvernerklæringen er knyttet til
                            behandlingen av personopplysninger særskilt for tjenestene på arbeidsplassen.no.
                        </BodyLong>
                        <BodyLong spacing>
                            Vi lagrer kun personopplysninger i de innloggede tjenestene og ved innhenting av
                            stillingsannonser fra arbeidsgivere via våre samarbeidspartnere. For utfyllende informasjon
                            om hvordan NAV behandler dine personopplysninger, kan du lese mer i{" "}
                            <Link href="https://www.nav.no/personvernerklaering">
                                NAVs generelle personvernerklæring.
                            </Link>
                        </BodyLong>
                        <BodyLong spacing>
                            For deg som representerer en arbeidsgiver, les mer lenger nede på siden om hvordan vi
                            behandler dine personopplysninger i løsningen.
                        </BodyLong>
                        <BodyLong>
                            <Link href="/personvern-superrask-soknad">
                                Informasjon om hvordan vi behandler dine data knyttet til superrask søknad.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Informasjonskapsler
                        </Heading>
                        <BodyLong>
                            Arbeidsplassen.no er et subdomene av nav.no. Vi lagrer ikke personopplysninger om deg på de
                            åpne/uinnloggede sidene på arbeidsplassen.nav.no, men bruker informasjonskapsler
                            («cookies»).{" "}
                            <Link href="https://www.nav.no/personvern-sikkerhet-navno">
                                Les mer om informasjonskapsler og innloggede tjenester på nav.no.
                            </Link>
                        </BodyLong>
                    </section>
                    <section className="arb-article-section">
                        <Heading className="mb-2" size="medium" level="2">
                            Les mer om hvordan vi behandler dine personopplysninger
                        </Heading>
                        <div className="arb-link-panel-grid">
                            <LinkPanel href="/personvern-under-oppfolging">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    For deg som er under arbeidsrettet oppfølging fra NAV
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Dersom du har registrert deg som arbeidssøker hos NAV, gjelder dette deg.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel href="/personvern-ikke-under-oppfolging">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    For deg som ikke er under arbeidsrettet oppfølging fra NAV
                                </LinkPanel.Title>
                            </LinkPanel>
                            <LinkPanel href="/personvern-arbeidsgiver">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    For deg som representerer en arbeidsgiver
                                </LinkPanel.Title>
                            </LinkPanel>
                        </div>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
