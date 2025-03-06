import { Bleed, BodyLong, Box, Button, Heading, HStack, Show } from "@navikt/ds-react";
import { FiguresSideBySide } from "@navikt/arbeidsplassen-react";
import InformationUkraine from "@/src/modules/(home)/InformationUkraine";
import ImageBannerLinkPanel from "@/src/common/components/ImageBannerLinkPanel";

export default function Home() {
    return (
        <div className="container-large mt-5 mb-24">
            <HStack gap="20" align="center">
                <div className="flex-3">
                    <Heading size="xlarge" level="1" spacing className="jumbo-h1">
                        Alle ledige jobber, <br />
                        samlet på én plass
                    </Heading>
                    <BodyLong size="large" spacing>
                        Lete etter jobb skal være enkelt. Fra deltid til direktør, finn jobben som passer for deg.
                    </BodyLong>

                    <HStack gap="4" className="mb-16">
                        <Button variant="primary" as="a" href="/stillinger" role="link">
                            Søk etter din neste jobb
                        </Button>
                        <Button variant="secondary" as="a" href="/sommerjobb" role="link">
                            Sikre sommereventyret for 2025
                        </Button>
                    </HStack>
                </div>

                <Show above="lg">
                    <FiguresSideBySide />
                </Show>
            </HStack>

            <ImageBannerLinkPanel
                href="/stillinger/sommerjobb"
                image={
                    [
                        "/images/ice-cream-shop.png",
                        "/images/kayakers-on-water.png",
                        "/images/lofoten-photo.png",
                        "/images/seagull-on-ledge.png",
                    ][Math.floor(Math.random() * 4)]
                }
                imgHeight="339"
                imgWidth="540"
                alt="Hagearbeider som holder to plantepotter og smiler mot kameraet."
                title="Sommerjobben 2025"
                description="Kafé i Lofoten, butikk i Tromsø eller utendørs jobb i Oslo? Sikre sommereventyret i dag!"
            />

            <div className="mb-12">
                <Bleed marginInline="full" className="overflow-x-hidden">
                    <Box background="surface-alt-3-moderate" padding={{ xs: "6", md: "4" }}>
                        <InformationUkraine />
                    </Box>
                </Bleed>
            </div>
        </div>
    );
}
