import { BodyLong, Heading, Link as AkselLink, Panel } from "@navikt/ds-react";
import NextLink from "next/link";
import UkrainianFlag from "@/src/common/components/images/UkrainianFlag";

export default function InformationUkraine() {
    return (
        <Panel className="container-xlarge ukraine">
            <Heading spacing level="2" size="large" lang="uk">
                Інформація про роботу в Норвегії для українських біженців
            </Heading>
            <ul
                className="ukraine-grid mb-6"
                aria-label="Liste med lenker til informasjonssider for Ukrainske flyktninger"
            >
                <li>
                    <BodyLong lang="en">
                        <NextLink locale="en" href="/work-in-norway" passHref legacyBehavior>
                            <AkselLink>Information about working in Norway</AkselLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong lang="uk">
                        <NextLink locale="uk" href="/work-in-norway" passHref legacyBehavior>
                            <AkselLink>Інформація українською мовою</AkselLink>
                        </NextLink>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong lang="ru">
                        <NextLink locale="ru" href="/work-in-norway" passHref legacyBehavior>
                            <AkselLink>Информация на русском языке</AkselLink>
                        </NextLink>
                    </BodyLong>
                </li>
            </ul>
            <UkrainianFlag className="ukraine-flag" ariaHidden="true" />
        </Panel>
    );
}
