import { Alert, BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";

export default function workInNorwayRu() {
    return (
        <Layout>
            <Head>
                <title>Информация о работе в Норвегии - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom" lang="ru">
                <Heading level="1" size="xlarge" spacing>
                    Информация о работе в Норвегии
                </Heading>
                <ul className="mb-3">
                    <li>
                        <BodyLong lang="en">
                            <NextLink href="/en/work-in-norway" passHref legacyBehavior>
                                <DsLink>Information about working in Norway</DsLink>
                            </NextLink>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong lang="uk">
                            <NextLink href="/uk/work-in-norway" passHref legacyBehavior>
                                <DsLink>Інформація українською мовою</DsLink>
                            </NextLink>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Информация на русском языке</BodyLong>
                    </li>
                    <li>
                        <BodyLong lang="nb">
                            <NextLink href="/no/work-in-norway" passHref legacyBehavior>
                                <DsLink>Informasjon for arbeidsgivere</DsLink>
                            </NextLink>
                        </BodyLong>
                    </li>
                </ul>

                <Alert variant="info" className="mb-3">
                    <Heading level="2" size="small">
                        Что нужно знать перед тем, как искать работу
                    </Heading>

                    <BodyLong spacing>
                        Вы должны получить{" "}
                        <DsLink href="https://udi.no/ru/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/protection-asylum-in-norway/">
                            коллективную защиту
                        </DsLink>
                        , прежде чем начать искать и подавать заявку на работу.
                    </BodyLong>
                    <BodyLong>
                        Работая в Норвегии важно понимать свои трудовые права и обязанности. На этой странице Вы найдете
                        полезную информацию о том, для чего требуется письменный трудовой договор, налоговая карта и
                        другое.
                    </BodyLong>
                </Alert>

                <Heading level="2" size="large" spacing>
                    Содержание
                </Heading>
                <ul className="mb-3">
                    <li>
                        <DsLink href="#apply">
                            <BodyLong>Процесс подачи заявки на работу</BodyLong>
                        </DsLink>
                    </li>
                    <li>
                        <DsLink href="#where">
                            <BodyLong>Где найти работу в Норвегии</BodyLong>
                        </DsLink>
                    </li>
                    <li>
                        <DsLink href="#salary">
                            <BodyLong>Получение зарплаты и ознакомительная программа</BodyLong>
                        </DsLink>
                    </li>
                    <li>
                        <DsLink href="#support">
                            <BodyLong>
                                Поддержка от Норвежского управления труда и социального обеспечения (NAV)
                            </BodyLong>
                        </DsLink>
                    </li>
                </ul>

                <Heading level="2" size="large" spacing id="apply">
                    Подача заявки на работу
                </Heading>
                <Heading level="3" size="medium" spacing>
                    Процесс подачи заявки на работу
                </Heading>
                <BodyLong spacing>
                    Во время трудоустройства большинство работодателей ожидают резюме или CV. Это краткий документ,
                    который описывает Ваши навыки, опыт работы, знание языка, Ваше образование и Ваши квалификации. Вы
                    можете найти много примеров по написанию резюме в интернете.
                </BodyLong>
                <BodyLong spacing>
                    <NextLink href="/slik-skriver-du-en-god-cv" passHref legacyBehavior>
                        <DsLink>Как написать хорошее резюме (Информация на норвежском языке)</DsLink>
                    </NextLink>
                </BodyLong>
                <BodyLong spacing>
                    Если работодателя заинтересует Ваша заявка, он пригласит Вас на собеседование по телефону, на
                    видео-встречу или лично.{" "}
                </BodyLong>
                <BodyLong spacing>
                    Цель собеседования состоит в том, чтобы работодатель познакомился с Вами и Вашими навыками. А также
                    чтобы Вы познакомились с работодателем и смогли задать вопросы, связанные с работой.
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Могу ли я использовать свое образование и квалификации в Норвегии?
                </Heading>
                <BodyLong spacing>
                    Большинство профессий или специальностей не нуждаются в особом признании для того, чтобы начать
                    работать в Норвегии.
                </BodyLong>
                <BodyLong spacing>
                    Однако некоторые профессии регулируются и нуждаются в одобрении/признании от норвежской власти.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nokut.no/en/foreign-education/list-of-regulated-professions/">
                        Список регулируемых профессий (Информация на английском языке)
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Ознакомьтесь со своими трудовыми правами и обязанностями
                </Heading>
                <BodyLong spacing>
                    Норвегия имеет много правил, которые способствуют тому, чтобы Вас не эксплуатировали, не обманывали
                    и не заставляли работать на незаконных условиях труда и заработной платы. Каждый работающий в
                    Норвегии должен иметь письменный трудовой договор.
                </BodyLong>
                <BodyLong spacing>
                    Уровень заработной платы в Норвегии выше, чем во многих других странах, и существует минимальная
                    заработная плата для некоторых профессий. Существуют правила, которые гарантируют, чтобы Вы не
                    работали сверхурочно и получали компенсацию за сверхурочную работу.
                </BodyLong>
                <BodyLong className="mb-3">
                    <DsLink href="https://www.arbeidstilsynet.no/en/knowyourrights-RU/">
                        Прочтите о своих трудовых правах и обязанностях в Норвегии
                    </DsLink>
                </BodyLong>

                <Heading level="2" size="large" spacing id="where">
                    Где найти работу в Норвегии
                </Heading>
                <BodyLong spacing>
                    <DsLink href="/stillinger">arbeidsplassen.no/stillinger</DsLink> – самая большая база данных с
                    объявлениями о работе.
                </BodyLong>
                <BodyLong spacing>
                    Следующая ссылка ознакомит Вас с вакансиями для людей, владеющих английским языком:
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="/stillinger?q=english">Объявления о работе на английском языке</DsLink>
                </BodyLong>
                <BodyLong spacing>
                    Если Вам нужно, Вы можете ограничить результаты поиска, используя левую часть страницы. Там Вы
                    сможете, например, отображать только вакансии в Вашем регионе или показывать работу на неполный
                    рабочий день.
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Здесь Вы также найдете вакансии разделенные по сфере деятельности:
                </Heading>
                <ul aria-label="Examples of industry specific searches" className="mb-3">
                    <li>
                        <BodyLong className="mb-0_5">
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=IT">IT</DsLink>
                            <br />
                            Пример: дизайнер, разработчик, ученый данных, архитектор данных
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong className="mb-0_5">
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Salg%20og%20service&occupationFirstLevels%5B%5D=Reiseliv%20og%20mat">
                                Еда и напитки, уборка, гостеприимство и продажи
                            </DsLink>
                            <br />
                            Пример: повар, официант, уборщик, портье/администратор, продавец
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong className="mb-0_5">
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Bygg%20og%20anlegg&occupationFirstLevels%5B%5D=H%C3%A5ndverkere&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Hjelpearbeider%20Bygg%20og%20anlegg&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Arbeidsleder%2C%20bygg%20og%20anlegg&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Maskin-%20og%20kranf%C3%B8rer">
                                Ремесленник
                            </DsLink>
                            <br />
                            Пример: строитель, плотник, маляр, электрик, сантехник
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Industri%20og%20produksjon&occupationFirstLevels%5B%5D=Natur%20og%20milj%C3%B8&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Jordbruk%20og%20dyrehold&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Skogbruk%2C%20gartnerarbeid%20og%20hagebruk&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Fiske%2C%20fangst%20og%20oppdrett&occupationSecondLevels%5B%5D=Industri%20og%20produksjon.Matproduksjon%20og%20n%C3%A6ringsmiddelarbeid">
                                Сельское хозяйство
                            </DsLink>
                            <br />
                            Пример: рыбалка, фермер
                        </BodyLong>
                    </li>
                </ul>

                <Heading level="2" size="large" spacing id="salary">
                    Получение зарплаты и ознакомительная программа
                </Heading>
                <Heading level="3" size="medium" spacing>
                    Могу ли я работать, участвуя в ознакомительной программе?
                </Heading>
                <BodyLong spacing>
                    Да, вы можете комбинировать работу с ознакомительной программой. Для получения дополнительной
                    информации посетите веб-страницы IMDi.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.imdi.no/en/information-to-refugees-from-the-ukraine/">
                        Информация для беженцев из Украины
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Налоговая карта
                </Heading>
                <BodyLong spacing>
                    Каждый работающий в Норвегии должен иметь налоговую карту. Налоговая карта – это электронный
                    документ, показывающий, сколько налогов должен удержать Ваш работодатель, прежде чем выплатить Вам
                    зарплату.
                </BodyLong>
                <BodyLong spacing>
                    Вы можете попросить своего работодателя подать заявку для получения налоговой карты на Вас или
                    подать заявку самостоятельно.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards/">
                        Как оформить налоговую карту
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Банковский счет
                </Heading>
                <BodyLong spacing>
                    Для того чтобы получать зарплату, оплачивать счета или получать другие выплаты нужен банковский
                    счет. Вы сами выбираете каким банком будете пользоваться.
                </BodyLong>
                <BodyLong spacing>
                    Большинство банков в Норвегии требуют Ваш идентификационный номер (D-номер), подтверждение места
                    жительства и документ, подтверждающий личность. Вы можете связаться с выбранным банком для получения
                    дополнительной информации.
                </BodyLong>
                <BodyLong className="mb-3">
                    <DsLink href="https://www.finansportalen.no/bank/dagligbank/">
                        Найдите банк, который вам подходит (Информация на норвежском языке)
                    </DsLink>
                </BodyLong>

                <Heading level="2" size="large" spacing id="support">
                    Поддержка от Норвежского управления труда и социального обеспечения (NAV)
                </Heading>
                <BodyLong spacing>
                    Если Вам предоставили коллективную защиту, Вы можете иметь право на помощь от NAV.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nav.no/ukraina/ru">Информация от NAV для беженцев из Украины</DsLink>
                </BodyLong>
                <BodyLong spacing>
                    Если Вы работаете в Норвегии, Вы автоматически становитесь членом Норвежской национальной страховой
                    системы с первого дня работы.
                </BodyLong>
                <BodyLong spacing>
                    Как член Норвежской национальной страховой системы, NAV отвечает за Ваши права на семейные выплаты,
                    пенсию, выплаты связанные с состоянием здоровья и многое другое.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits">
                        Прочитайте об услугах и преимуществах от NAV (Информация на английском языке)
                    </DsLink>
                </BodyLong>
            </article>
        </Layout>
    );
}
