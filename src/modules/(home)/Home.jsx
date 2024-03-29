import { Bleed, BodyLong, Box, Button, Heading, HStack, LinkPanel, Show } from "@navikt/ds-react";
import { FiguresSideBySide } from "@navikt/arbeidsplassen-react";
import InformationUkraine from "@/src/modules/(home)/InformationUkraine";
import ImageLinkPanelSmall from "@/src/common/components/ImageLinkPanelSmall";
import ImageBannerLinkPanel from "@/src/common/components/ImageBannerLinkPanel";

export default function Home() {
    return (
        <div className="container-large mt-5 mb-24">
            <HStack gap="4" align="center">
                <div className="flex-3">
                    <Heading size="xlarge" level="1" spacing className="jumbo-h1">
                        Alt av arbeid, <br />
                        samlet på én plass.
                    </Heading>
                    <BodyLong size="large" spacing>
                        Finn din neste jobb i en av Norges største samlinger av stillinger. Her finner du jobber fra
                        alle bransjer i markedet.
                    </BodyLong>

                    <div className="mb-16">
                        <Button variant="primary" as="a" href="/stillinger" role="link">
                            Søk etter din neste jobb
                        </Button>
                    </div>
                </div>

                <Show above="lg">
                    <FiguresSideBySide />
                </Show>
            </HStack>

            <div className="arb-link-panel-grid mb-12">
                <LinkPanel className="arb-link-panel-tertiary" href="/jobbtreff">
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

            <ImageBannerLinkPanel
                href="/sommerjobb-jobbsoker"
                image="/images/woman-portrait-gardening.jpg"
                alt="Hagearbeider som holder to plantepotter og smiler mot kameraet."
                title="Sommerjobben venter på deg!"
                description="
                Nye muligheter legges ut hele tiden – søk på din neste sommerjobb nå!
            "
            />

            <div className="mb-12">
                <Bleed marginInline="full" asChild>
                    <Box background="surface-alt-3-moderate" padding={{ xs: "6", md: "4" }}>
                        <InformationUkraine />
                    </Box>
                </Bleed>
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
