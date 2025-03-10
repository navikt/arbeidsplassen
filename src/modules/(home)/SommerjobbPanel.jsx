import { BodyLong, Box, Heading, HGrid } from "@navikt/ds-react";
import { ArrowRightIcon } from "@navikt/aksel-icons";
import Link from "next/link";
import Image from "next/image";

function SommerjobbPanel() {
    const randomImg = [
        "/images/a-street-in-town.jpg",
        "/images/ice-cream-shop.jpg",
        "/images/kayakers-on-water.jpg",
        "/images/lofoten-photo.jpg",
        "/images/seagull-on-ledge.jpg",
    ][Math.floor(Math.random() * 4)];

    return (
        <Link href="/sommerjobb" className="box-link">
            <Box background="surface-alt-1" padding={{ xs: "6", lg: "12" }} borderRadius="medium">
                <HGrid gap={{ xs: "6", lg: "12" }} columns={{ xs: "1", md: "auto 1fr" }} align="center">
                    <Image className="box-link-image" src={randomImg} height="316" width="504" alt="Sommeridyll" />
                    <div>
                        <Heading spacing level="2" size="large">
                            Sommerjobben 2025
                        </Heading>
                        <BodyLong size="large" className="mb-1">
                            Kafé i Lofoten, butikk i Tromsø eller utendørs jobb i Oslo? Sikre sommereventyret i dag!
                        </BodyLong>
                        <ArrowRightIcon aria-hidden="true" fontSize="2rem" />
                    </div>
                </HGrid>
            </Box>
        </Link>
    );
}
export default SommerjobbPanel;
