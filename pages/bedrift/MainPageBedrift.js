import { Button, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import IllustrationBedrift from "@/pages/components/images/IllustrationBedrift";

const MainPageBedrift = () => {
    return (
        <div className="company-page page-margin-top-and-bottom mb-108">
            <section className="arb-home-section-flex">
                <div>
                    <Heading size="xlarge" level="1" spacing>
                        Rekrutter deres neste <br />
                        medarbeider
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Motta søknader raskt og enkelt fra relevante jobbsøkere.
                    </Ingress>

                    <div className="mb-64">
                        <Button variant="primary">
                            <Link className="button-link" href="https://arbeidsplassen.nav.no/stillingsregistrering">
                                Gå til din side bedrift
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="arb-home-section-flex arb-home-figure-flex">
                    <IllustrationBedrift />
                </div>
            </section>

            <section className="mb-108">
                <div className="arb-link-panel-grid mb-32">
                    <LinkPanel
                        className="arb-secondary-bg-text arb-link-panel"
                        href="/articles/bedrift/skikkelig-bra-stillingsannonse"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Hvordan skrive en skikkelig bra stillingsannonse?
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Hva ser jobbsøkere etter når de leser en stillingsannonse?
                        </LinkPanel.Description>
                    </LinkPanel>
                    <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/arbeidsgivertjenester">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Hjelp med innlogging?
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Les hvordan du som arbeidsgiver kan ta i bruk våre tjenester i dag.
                        </LinkPanel.Description>
                    </LinkPanel>
                    <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/no/work-in-norway">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Ønsker du å rekruttere flyktninger?
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Les våre anbefalinger for å nå ut til relevante kandidater.
                        </LinkPanel.Description>
                    </LinkPanel>
                </div>
            </section>

            <section className="">
                <Button variant="primary">
                    <Link className="button-link" href="./articles/bedrift">
                        Artikler
                    </Link>
                </Button>
            </section>
        </div>
    );
};

export default MainPageBedrift;
