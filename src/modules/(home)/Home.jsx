import { Bleed, BodyLong, Box, Button, Heading, HStack, Show } from "@navikt/ds-react";
import { FiguresSideBySide } from "@navikt/arbeidsplassen-react";
import InformationUkraine from "@/src/modules/(home)/InformationUkraine";
import ImageLinkPanelSmall from "@/src/common/components/ImageLinkPanelSmall";

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

                    <HStack gap="4" className="mb-16">
                        <Button variant="primary" as="a" href="/stillinger" role="link">
                            Søk etter din neste jobb
                        </Button>
                        <Button variant="secondary" as="a" href="/stillinger/sommerjobb" role="link">
                            Sikre sommereventyret for 2025
                        </Button>
                    </HStack>
                </div>

                <Show above="lg">
                    <FiguresSideBySide />
                </Show>
            </HStack>

            <div className="image-link-panel-grid-small mb-12">
                <ImageLinkPanelSmall
                    href="/nytt-sokefelt"
                    image="/images/ansatt.png"
                    alt="En glad person som står i en butikk."
                    title="Nytt søkefelt - enklere, raskere og mer fleksibelt!"
                    description="Nå kan du kombinere fritekst og filtre for å finne akkurat jobben du er ute etter."
                    color="primary"
                />
                <ImageLinkPanelSmall
                    image="/images/jobbtreff.jpg"
                    alt="Bilde av person med laptop"
                    title="Enklere å finne jobber som kan passe"
                    description="Vi bruker kunstig intelligens til å plassere annonsen i den kategorien som den (mest sannsynlig) hører hjemme i."
                    href="/nye-filtre"
                    color="tertiary"
                />
                <ImageLinkPanelSmall
                    href="jobbe-i-utlandet"
                    image="/images/paris.jpg"
                    alt="Bilde av Eiffeltårnet"
                    title="Jobbe i utlandet?"
                    description="Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
                    color="secondary"
                />
            </div>

            <div className="24">
                <Bleed marginInline="full" className="overflow-x-hidden">
                    <Box background="surface-alt-3-moderate" padding={{ xs: "6", md: "4" }}>
                        <InformationUkraine />
                    </Box>
                </Bleed>
            </div>
        </div>
    );
}
