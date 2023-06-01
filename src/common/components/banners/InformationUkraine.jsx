import { BodyLong, Heading, Link as DsLink, Panel } from "@navikt/ds-react";
import NextLink from "next/link";
import UkrainianFlag from "@/src/common/components/images/UkrainianFlag";

export default function InformationUkraine() {
    return (
        <Panel className="container-xlarge arb-tertiary-bg-text ukraine">
            <Heading spacing level="2" size="large" lang="en">
                Information about working in Norway for refugees from Ukraine
            </Heading>
            <ul className="ukraine-grid mb-1_5">
                <li>
                    <BodyLong lang="en">
                        <NextLink href="/en/work-in-norway" passHref legacyBehavior>
                            <DsLink>Information about working in Norway</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong lang="uk">
                        <NextLink href="/ua/work-in-norway" passHref legacyBehavior>
                            <DsLink>Інформація українською мовою</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong lang="ru">
                        <NextLink href="/ru/work-in-norway" passHref legacyBehavior>
                            <DsLink>Информация на русском языке</DsLink>
                        </NextLink>
                    </BodyLong>
                </li>
            </ul>
            <UkrainianFlag className="ukraine-flag" ariaHidden="true" />
        </Panel>
    );
}
