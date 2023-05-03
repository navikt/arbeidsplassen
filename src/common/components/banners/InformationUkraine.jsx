import { BodyLong, Heading, Link as DsLink, Panel } from "@navikt/ds-react";
import NextLink from "next/link";
import UkrainianFlag from "@/src/common/components/images/UkrainianFlag";

export default function InformationUkraine() {
    return (
        <Panel className="container-large arb-tertiary-bg-text text-center">
            <Heading spacing level="2" size="large">
                Information about working in Norway for refugees from Ukraine
                <UkrainianFlag className="h-2" ariaHidden="Ukrainsk flagg" />
            </Heading>
            <ul className="ukraine-grid">
                <li>
                    <BodyLong>
                        <NextLink href="/en/work-in-norway" passHref legacyBehavior>
                            <DsLink>Information about working in Norway</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong>
                        <NextLink href="/ua/work-in-norway" passHref legacyBehavior>
                            <DsLink>Інформація українською мовою</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong className="text-center">
                        <NextLink href="/ru/work-in-norway" passHref legacyBehavior>
                            <DsLink>Информация на русском языке</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
            </ul>
        </Panel>
    );
}
