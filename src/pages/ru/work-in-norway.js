import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { useEffect } from "react";
import Layout from "@/src/common/components/layout/Layout";

export default function workInNorwayRu() {
    useEffect(() => {
        document.documentElement.lang = "ru";
    });
    return (
        <Layout>
            <div className="page-margin-top-and-bottom">
                <div className="layout-toc">
                    <section className="mb-5">
                        <div className="article">
                            <Heading size="xlarge" level="1" spacing>
                                Информация о работе в Норвегии
                            </Heading>
                        </div>
                        <div className="article">
                            <ul>
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
                                    <BodyLong>Информация на русском языке</BodyLong>
                                </li>
                                <li>
                                    <BodyLong>
                                        <Link href="/no/work-in-norway">Informasjon for arbeidsgivere</Link>
                                    </BodyLong>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="mb-6">
                        <Heading className="text-center" size="medium" level="2" spacing>
                            Процесс подачи заявки на работу
                        </Heading>
                        <BodyLong>
                            Во время трудоустройства большинство работодателей ожидают резюме или CV. Это краткий
                            документ, который описывает Ваши навыки, опыт работы, знание языка, Ваше образование и Ваши
                            квалификации. Вы можете найти много примеров по написанию резюме в интернете.
                        </BodyLong>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
