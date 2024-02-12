import { Button, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import { FiguresSideBySide } from "@navikt/arbeidsplassen-react";
import InformationUkraine from "@/src/common/components/banners/InformationUkraine";
import ImageLinkPanelSmall from "@/src/common/components/ImageLinkPanelSmall";

function MainPage() {
    return (
        <div className="container-large page-margin-top-and-bottom mb-12">
            <section className="arb-home-section-flex">
                <div className="arb-home-div-width">
                    <Heading size="xlarge" level="1" spacing className="jumbo-h1">
                        Alt av arbeid, <br />
                        samlet på én plass.
                    </Heading>
                    <Ingress spacing>
                        Finn din neste jobb i en av Norges største samlinger av stillinger. Her finner du jobber fra
                        alle bransjer i markedet.
                    </Ingress>

                    <div className="mb-16">
                        <Button variant="primary" as="a" href="/stillinger" role="link">
                            Søk etter din neste jobb
                        </Button>
                    </div>
                </div>

                <div className="arb-home-illustration arb-home-illustration-person">
                    <FiguresSideBySide />
                </div>
            </section>

            <div className="arb-link-panel-grid mb-12">
                <LinkPanel className="arb-link-panel-primary" href="/jobbtreff">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Vis kommende jobbtreff
                    </LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        Følg en direkte sending fra en bedrift og hør om deres stillinger.
                    </LinkPanel.Description>
                </LinkPanel>
                <LinkPanel className="arb-link-panel-secondary" href="/cv">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Skriv din CV
                    </LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        Fyll ut din CV og bruk den ved jobbsøking.
                    </LinkPanel.Description>
                </LinkPanel>
            </div>

            <div className="arb-home-banner mb-12">
                <InformationUkraine />
            </div>

            <div className="image-link-panel-grid-small mb-24">
                <ImageLinkPanelSmall
                    href="/superrask-soknad-person"
                    image="/images/jobbsoker.jpg"
                    alt="En person som skriver på mobilen sin."
                    title="Superrask søknad"
                    description="En enklere måte å komme i kontakt med bedrifter."
                    color="primary"
                />
                <ImageLinkPanelSmall
                    href="mot-bedrifter-pa-en-ny-mate"
                    image="/images/jobbtreff.webp"
                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                    title="Jobbtreff – møt nye bedrifter på en ny måte"
                    description="Følg en direkte sending der bedriften forteller om seg selv og hva slags stillinger du kan søke på."
                    color="secondary"
                />
                <ImageLinkPanelSmall
                    image="/images/students.jpg"
                    alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                    title="Tips til jobbsøknaden"
                    description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte akkurat deg."
                    href="/tips-til-jobbsoknaden"
                    color="tertiary"
                />
            </div>
        </div>
    );
}

export default MainPage;
