import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { useEffect } from "react";
import Layout from "@/src/common/components/layout/Layout";

export default function workInNorwayUa() {
    useEffect(() => {
        document.documentElement.lang = "ua";
    });
    return (
        <Layout>
            <div className="page-margin-top-and-bottom">
                <div className="layout-toc">
                    <section className="mb-80">
                        <div className="article">
                            <Heading className="text-center" size="xlarge" level="1" spacing>
                                Інформація про роботу в Норвегії
                            </Heading>
                        </div>
                        <div className="article">
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

                    <div className="mb-108">
                        <Heading className="text-center" size="medium" level="2" spacing>
                            Процес подання заяви на роботу
                        </Heading>
                        <BodyLong>
                            Під час працевлаштування більшість роботодавців очікують резюме або CV. Це короткий
                            документ, який описує Ваші навички, досвід роботи, знання мови, Вашу освіту та Ваші
                            кваліфікації. Ви можете знайти багато прикладів з написання резюме в інтернеті.
                        </BodyLong>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
