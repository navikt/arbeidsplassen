import { BodyLong, Heading, Link, Panel } from "@navikt/ds-react";

export default function InformationUkraine() {
    return (
        <Panel className="arb-tertiary-bg-text text-center">
            <Heading spacing level="2" size="large">
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
                        <Link href="/ua/work-in-norway">Інформація українською мовою</Link>
                    </BodyLong>
                </li>
                <li>
                    <BodyLong className="text-center">
                        <Link href="/ru/work-in-norway">Информация на русском языке</Link>
                    </BodyLong>
                </li>
            </ul>
        </Panel>
    );
}
