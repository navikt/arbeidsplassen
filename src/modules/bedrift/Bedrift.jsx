import { BodyLong, Button, Heading, HStack, LinkPanel, Show } from "@navikt/ds-react";
import { FiguresGivingHighFive } from "@navikt/arbeidsplassen-react";
import ImageLinkPanelSmall from "@/src/common/components/ImageLinkPanelSmall";

export default function Bedrift() {
    return (
        <div className="container-large mt-5 mb-24">
            <HStack gap="4" align="center">
                <div className="flex-3">
                    <Heading size="xlarge" level="1" spacing className="jumbo-h1">
                        Enkel jobbutlysning, kostnadsfritt.
                    </Heading>
                    <BodyLong size="large" spacing>
                        Kom raskt i kontakt med kvalifiserte jobbsøkere.
                    </BodyLong>

                    <div className="mb-16">
                        <Button variant="primary" as="a" href="/stillingsregistrering" role="link">
                            Gå til min bedriftsside
                        </Button>
                    </div>
                </div>

                <Show above="lg">
                    <FiguresGivingHighFive />
                </Show>
            </HStack>

            <div className="arb-link-panel-grid mb-12">
                <LinkPanel className="arb-link-panel-tertiary" href="/stillingsregistrering/stillingsannonser">
                    <LinkPanel.Title className="navds-heading--small">Lag ny stillingsannonse</LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        Gjør deg synlig i et av Norges største stillingssøk.
                    </LinkPanel.Description>
                </LinkPanel>

                <LinkPanel className="arb-link-panel-primary" href="/rekruttere-flyktninger">
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
                    alt="To personer som håndhilser"
                    title="Superrask Søknad"
                    description="En enklere måte å komme i kontakt med relevante jobbsøkere."
                    color="primary"
                />
                <ImageLinkPanelSmall
                    href="/enklere-a-skrive-gode-kvalifikasjoner"
                    image="/images/dog-thumbnail.png"
                    alt="Glad hund som som sitter ved kjøkkenbordet og ser på en person som fyller ut superrask søknad."
                    title="Nå er det enklere å skrive gode kvalifikasjoner og overskrifter"
                    description="Du kan nå få forslag til kvalfikasjoner og overskrifter ved hjelp av kunstig intelligens."
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
