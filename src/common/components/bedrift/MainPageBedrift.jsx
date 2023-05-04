import { Button, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import IllustrationBedrift from "@/src/common/components/images/IllustrationBedrift";
import ImageLinkPanelMainPage from "@/src/common/components/ImageLinkPanelSmall";

function MainPageBedrift() {
    return (
        <div className="container-large page-margin-top-and-bottom mb-6">
            <section className="arb-home-section-flex">
                <div className="arb-home-div-width">
                    <Heading size="xlarge" level="1" spacing>
                        Rekrutter deres neste <br />
                        medarbeider
                    </Heading>
                    <Ingress spacing>Motta søknader raskt og enkelt fra relevante jobbsøkere.</Ingress>

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

            <div className="arb-link-panel-grid mb-5">
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

            <div className="image-link-panel-grid-small">
                <ImageLinkPanelMainPage
                    href="/sommerjobb"
                    image="/images/sommerjobb.png"
                    alt="En kunde får servert en burger fra en food truck"
                    title="Tiden for sommerjobb er her"
                    description="Gi unge en mulighet - utlys sommerjobben nå!"
                    className="arb-primary-bg-text arb-link-panel image-link-panel-link ml-4"
                />
                <ImageLinkPanelMainPage
                    href="/superrask-soknad-person"
                    image="/images/jobbsoker.jpg"
                    alt="En person som skriver på mobilen sin."
                    title="Nyhet! Superrask søknad"
                    description="En enklere måte å komme i kontakt med bedrifter."
                    className="arb-tertiary-bg-text arb-link-panel image-link-panel-link ml-4"
                />
                <ImageLinkPanelMainPage
                    href="mot-bedrifter-pa-en-ny-mate"
                    image="/images/jobbtreff.webp"
                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                    title="Jobbtreff – møt nye bedrifter på en ny måte"
                    description="Følg en direkte sending der bedriften forteller om seg selv og hva slags stillinger du kan søke på."
                    className="arb-primary-solid-bg-text arb-link-panel image-link-panel-link ml-4"
                />
            </div>
        </div>
    );
}

export default MainPageBedrift;
