import { Button, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import InformationUkraine from "@/pages/components/banners/InformationUkraine";
import IllustrationPerson from "@/pages/components/images/IllustrationPerson";

const MainPage = () => {
    return (
        <div className="person-page page-margin-top-and-bottom">
            <section className="arb-home-section-flex">
                <div className="arb-home-div-width">
                    <Heading size="xlarge" level="1" spacing>
                        Alt av arbeid, <br />
                        samlet på én plass.
                    </Heading>
                    <Ingress className="arb-ingress-xlarge" spacing>
                        Finn din neste jobb i Norges største samling av stillinger. Her finner du jobber fra alle
                        bransjer i markedet.
                    </Ingress>

                    <div className="mb-64">
                        <Button variant="primary">
                            <a className="button-link" href="https://arbeidsplassen.nav.no/stillinger">
                                Se ledige stillinger
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="arb-home-section-flex arb-home-figure-flex">
                    <IllustrationPerson />
                </div>
            </section>

            <section>
                <div className="arb-link-panel-grid mb-80">
                    <LinkPanel
                        className="arb-primary-bg-text arb-link-panel"
                        href="https://arbeidsplassen.nav.no/jobbtreff/"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Se kommende jobbtreff
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Følg en direkte sending fra en bedrift og hør om deres stillinger.
                        </LinkPanel.Description>
                    </LinkPanel>
                    <LinkPanel
                        className="arb-secondary-bg-text arb-link-panel"
                        href="https://arbeidsplassen.nav.no/cv/"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Skriv din CV
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Fyll ut din CV og bruk den ved jobbsøking.
                        </LinkPanel.Description>
                    </LinkPanel>
                </div>
            </section>

            <section>
                <div className="mb-108">
                    <InformationUkraine />
                </div>
            </section>

            <section>
                <Button variant="primary">
                    <Link className="button-link" href="/articles/person">
                        Artikler
                    </Link>
                </Button>
            </section>
        </div>
    );
};

export default MainPage;
