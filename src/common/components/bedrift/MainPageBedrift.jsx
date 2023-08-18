import { Button, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import IllustrationBedrift from "@/src/common/components/images/IllustrationBedrift";
import ImageLinkPanelSmall from "@/src/common/components/ImageLinkPanelSmall";

function MainPageBedrift() {
    return (
        <div className="container-large page-margin-top-and-bottom mb-6">
            <section className="arb-home-section-flex">
                <div className="arb-home-div-width">
                    <Heading size="xlarge" level="1" spacing className="bedrift-h1 jumbo-h1">
                        Rekrutter deres neste medarbeider
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
                <LinkPanel
                    className="arb-tertiary-bg-text arb-link-panel"
                    href="/stillingsregistrering/stillingsannonser"
                >
                    <LinkPanel.Title className="navds-heading--small">Lag ny stillingsannonse</LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        Gjør deg synlig i et av Norges største stillingssøk.
                    </LinkPanel.Description>
                </LinkPanel>

                <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/rekruttere-flyktninger">
                    <LinkPanel.Title className="navds-heading--small">
                        Ønsker du å rekruttere flyktninger?
                    </LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        Les våre anbefalinger for å nå ut til relevante kandidater.
                    </LinkPanel.Description>
                </LinkPanel>
            </div>

            <div className="image-link-panel-grid-small">
                <ImageLinkPanelSmall
                    href="/superrask-soknad-bedrift"
                    image="/images/bedrift.jpg"
                    alt="En mann sitter på et kontor og tar en annen i hånden"
                    title="Nyhet! Superrask søknad"
                    description="En enklere måte å komme i kontakt med relevante jobbsøkere."
                    color="primary"
                />
                <ImageLinkPanelSmall
                    href="mot-jobbsokere-pa-en-ny-mate"
                    image="/images/jobbtreff.webp"
                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                    title="Jobbtreff – møt jobbsøkere på en ny måte"
                    description="Trenger dere nye medarbeidere? Nå kan du presentere bedriften din for interesserte
                                    jobbsøkere i en direkte sending."
                    color="secondary"
                />
                <ImageLinkPanelSmall
                    href="/skikkelig-bra-stillingsannonse"
                    image="/images/stillingsannonse.jpg"
                    alt="Person som skriver på en skrivemaskin"
                    title="Skriv en skikkelig bra stillingsannonse!"
                    description="Hva ser jobbsøkere etter når de leser en stillingsannonse? Hva bør du tenke på når du skriver
                    annonsen?"
                    color="tertiary"
                />
            </div>
        </div>
    );
}

export default MainPageBedrift;
