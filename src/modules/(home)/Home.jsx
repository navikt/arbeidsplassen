import { Bleed, BodyLong, Box, Button, Heading, HStack, Show } from "@navikt/ds-react";
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
                    href="jobbe-i-utlandet"
                    image="/images/paris.jpg"
                    alt="Bilde av Eiffeltårnet"
                    title="Jobbe i utlandet?"
                    description="Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
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
