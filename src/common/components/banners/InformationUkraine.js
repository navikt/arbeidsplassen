import { BodyLong, Heading, Link, Panel } from "@navikt/ds-react";
import NextLink from "next/link";

export default function InformationUkraine() {
    return (
        <Panel className="arb-tertiary-bg-text text-center">
            <Heading spacing level="2" size="large">
                Information about working in Norway for refugees from Ukraine 🇺🇦
            </Heading>
            <ul className="ukraine-grid">
                <li>
                    <BodyLong>
                        <NextLink href="/work-in-norway-en" passHref legacyBehavior>
                            <Link>Information about working in Norway</Link>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong>
                        <NextLink href="/work-in-norway-ua" passHref legacyBehavior>
                            <Link>Інформація українською мовою</Link>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong className="text-center">
                        <NextLink href="/work-in-norway-ru" passHref legacyBehavior>
                            <Link>Информация на русском языке</Link>
                        </NextLink>
                    </BodyLong>
                </li>
            </ul>
        </Panel>
    );
}
