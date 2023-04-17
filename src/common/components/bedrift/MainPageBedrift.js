import { Button, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import IllustrationBedrift from "@/src/common/components/images/IllustrationBedrift";

const MainPageBedrift = () => {
    return (
        <div className="company-page page-margin-top-and-bottom mb-6">
            <section className="arb-home-section-flex">
                <div className="arb-home-div-width">
                    <Heading size="xlarge" level="1" spacing>
                        Rekrutter deres neste <br />
                        medarbeider
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Motta søknader raskt og enkelt fra relevante jobbsøkere.
                    </Ingress>

                    <div className="mb-4">
                        <Button variant="primary" as="a" href="/stillingsregistrering">
                            Gå til din side bedrift
                        </Button>
                    </div>
                </div>

                <div className="arb-home-illustration">
                    <IllustrationBedrift />
                </div>
            </section>

            <section>
                <div className="arb-link-panel-grid">
                    <LinkPanel
                        className="arb-primary-bg-text arb-link-panel"
                        href="/articles/bedrift/superrask-soknad-bedrift"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Nyhet! Superrask søknad
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            En enklere måte å komme i kontakt med relevante jobbsøkere.
                        </LinkPanel.Description>
                    </LinkPanel>
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
                    <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/work-in-norway-no">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Ønsker du å rekruttere flyktninger?
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Les våre anbefalinger for å nå ut til relevante kandidater.
                        </LinkPanel.Description>
                    </LinkPanel>
                </div>
            </section>
        </div>
    );
};

export default MainPageBedrift;
