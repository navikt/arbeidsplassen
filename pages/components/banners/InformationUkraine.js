import { BodyLong, Heading, Link, Panel } from "@navikt/ds-react";

export default function InformationUkraine() {
    return (
        <Panel className="arb-tertiary-bg-text text-center">
            <Heading spacing level="3" size="medium">
                Information about working in Norway for refugees from Ukraine 🇺🇦
            </Heading>
            <ul className="ukraine-grid">
                <li>
                    <BodyLong>
                        <Link href="/en/work-in-norway">Information about working in Norway</Link>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong>
                        <Link href="/articles/work-in-norway-ua">Інформація українською мовою</Link>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong className="text-center">
                        <Link href="/articles/work-in-norway-ru">Информация на русском языке</Link>
                    </BodyLong>
                </li>
            </ul>
        </Panel>
    );
}
