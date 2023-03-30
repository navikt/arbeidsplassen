import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutPerson from "@/pages/components/layouts/LayoutPerson";
import { useEffect } from "react";

export default function workInNorwayUa() {
    useEffect(() => {
        document.documentElement.lang = "ua";
    });
    return (
        <LayoutPerson>
            <div className="page-margin-top-and-bottom">
                <div className="layout-toc">
                    <section className="mb-80">
                        <div className="arb-article">
                            <Heading className="text-center" size="xlarge" level="1" spacing>
                                Інформація про роботу в Норвегії
                            </Heading>
                        </div>
                        <div className="arb-article">
                            <ul className="refugees-grid">
                                <li>
                                    <BodyLong className="refugees-text-right">
                                        <Link href="/en/work-in-norway">Information about working in Norway</Link>
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong className="refugees-text-left">Інформація українською мовою</BodyLong>
                                </li>
                                <li>
                                    <BodyLong className="refugees-text-right">
                                        <Link href="/ru/work-in-norway">Информация на русском языке</Link>
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong className="refugees-text-left">
                                        <Link href="/no/work-in-norway">Informasjon for arbeidsgivere</Link>
                                    </BodyLong>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="arb-article-section">
                        <div className="arb-article mb-108">
                            <Heading className="text-center" size="medium" level="2" spacing>
                                Процес подання заяви на роботу
                            </Heading>
                            <BodyLong>
                                Під час працевлаштування більшість роботодавців очікують резюме або CV. Це короткий
                                документ, який описує Ваші навички, досвід роботи, знання мови, Вашу освіту та Ваші
                                кваліфікації. Ви можете знайти багато прикладів з написання резюме в інтернеті.
                            </BodyLong>
                        </div>
                    </section>
                </div>
            </div>
        </LayoutPerson>
    );
}
