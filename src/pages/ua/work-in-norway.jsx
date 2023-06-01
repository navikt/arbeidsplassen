import Layout from "@/src/common/components/layout/Layout";
import { Alert, BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Head from "next/head";
import NextLink from "next/link";

export default function workInNorwayUa() {
    return (
        <Layout>
            <Head>
                <title>Інформація про роботу в Норвегії - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom" lang="uk">
                <Heading level="1" size="xlarge" spacing>
                    Інформація про роботу в Норвегії
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
                        <BodyLong>Інформація українською мовою</BodyLong>
                    </li>
                    <li>
                        <BodyLong lang="ru">
                            <NextLink href="/ru/work-in-norway" passHref legacyBehavior>
                                <DsLink>Информация на русском языке</DsLink>
                            </NextLink>
                        </BodyLong>
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
                        Що треба знати перед тим як шукати роботу
                    </Heading>

                    <BodyLong spacing>
                        Ви повинні отримати{" "}
                        <DsLink href="https://udi.no/en/situation-in-ukraine/stay-in-norway/protection-asylum-in-norway/">
                            колективний захист
                        </DsLink>{" "}
                        перш ніж почати шукати та подавати заяву на роботу.
                    </BodyLong>
                    <BodyLong>
                        Працюючи в Норвегії важливо розуміти свої трудові права та обов’язки. На цій сторінці Ви
                        знайдете корисну інформацію про те, для чого потрібен письмовий трудовий договір, податкова
                        карта та інше.
                    </BodyLong>
                </Alert>

                <Heading level="2" size="large" spacing>
                    Зміст
                </Heading>
                <ul className="mb-3">
                    <li>
                        <BodyLong>
                            <DsLink href="#apply">Подача заяви на роботу</DsLink>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            <DsLink href="#where">Де знайти роботу в Норвегії</DsLink>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            <DsLink href="#salary">Отримання зарплати та ознайомлювальна програма</DsLink>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            <DsLink href="#support">
                                Підтримка від Норвезького управління праці та соціального забезпечення (NAV)
                            </DsLink>
                        </BodyLong>
                    </li>
                </ul>

                <Heading level="2" size="large" spacing id="apply">
                    Подача заяви на роботу
                </Heading>
                <Heading level="3" size="medium" spacing>
                    Процес подання заяви на роботу
                </Heading>
                <BodyLong spacing>
                    Під час працевлаштування більшість роботодавців очікують резюме або CV. Це короткий документ, який
                    описує Ваші навички, досвід роботи, знання мови, Вашу освіту та Ваші кваліфікації. Ви можете знайти
                    багато прикладів з написання резюме в інтернеті.
                </BodyLong>
                <BodyLong spacing>
                    <NextLink href="/slik-skriver-du-en-god-cv" passHref legacyBehavior>
                        <DsLink>Як написати гарне резюме (інформація норвезькою мовою)</DsLink>
                    </NextLink>
                </BodyLong>
                <BodyLong spacing>
                    Якщо роботодавця зацікавить Ваша заява, він запросить Вас на співбесіду по телефону, на відеозустріч
                    або особисто.
                </BodyLong>
                <BodyLong spacing>
                    Мета співбесіди полягає в тому, щоб роботодавець познайомився з Вами та Вашими навичками. А також
                    щоб Ви познайомилися з роботодавцем і змогли задати питання пов’язані з роботою.
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Чи можу я застосовувати свою освіту та кваліфікації в Норвегії?
                </Heading>
                <BodyLong spacing>
                    Більшість професій або спеціальностей не потребують особливого визнання для того щоб почати
                    працювати в Норвегії.
                </BodyLong>
                <BodyLong spacing>
                    Однак деякі професії регулюються та потребують схвалення/визнання від норвезької влади.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nokut.no/en/foreign-education/list-of-regulated-professions/">
                        Перелік регульованих професій (Інформація англійською мовою)
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Ознайомтеся зі своїми трудовими правами та обов’язками
                </Heading>
                <BodyLong spacing>
                    Норвегія має багато правил, які сприяють тому щоб Вас не експлуатовували, не обманювали і не
                    примушували працювати на незаконних умовах праці та заробітної плати. Кожен, хто працює в Норвегії
                    повинен мати письмовий трудовий договір.
                </BodyLong>
                <BodyLong spacing>
                    Рівень заробітної плати в Норвегії вищий, ніж у багатьох інших країнах, та існує мінімальна
                    заробітна плата для деяких професій. Існують правила, які гарантують щоб Ви не працювали
                    понаднормово і отримували компенсацію за понаднормову роботу.
                </BodyLong>
                <BodyLong className="mb-3">
                    <DsLink href="https://www.arbeidstilsynet.no/en/knowyourrights-UK/">
                        Прочитайте про свої трудові права та обов’язки в Норвегії
                    </DsLink>
                </BodyLong>

                <Heading level="2" size="large" id="where" spacing>
                    Де знайти роботу в Норвегії
                </Heading>
                <BodyLong spacing>
                    <DsLink href="/stillinger">arbeidsplassen.no/stillinger</DsLink> - найбільша база даних з
                    оголошеннями про роботу.
                </BodyLong>
                <BodyLong spacing>
                    Наведене нижче посилання ознайомить Вас з вакансіями для людей, володіючих англійською мовою:
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="/stillinger?q=english">Оголошення про роботу англійською мовою</DsLink>
                </BodyLong>
                <BodyLong spacing>
                    Якщо Вам потрібно, Ви можете обмежити результати пошуку використовуючи ліву частину сторінки. Там Ви
                    зможете, наприклад, відображати лише вакансії у Вашому регіоні або показувати лише роботу на
                    неповний робочий день.
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Тут Ви також знайдете вакансії розподілені за сферою діяльності:
                </Heading>
                <ul className="mb-3" aria-label="Examples of industry specific searches">
                    <li>
                        <BodyLong spacing>
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=IT">IT</DsLink>
                            <br />
                            Наприклад: дизайнер, розробник, науковець даних, архітектор даних
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Salg%20og%20service&occupationFirstLevels%5B%5D=Reiseliv%20og%20mat">
                                Їжа та напої, прибирання, гостинність і продажі
                            </DsLink>
                            <br />
                            Наприклад: кухар, офіціант, прибиральник, портьє/адміністратор, продавець
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Bygg%20og%20anlegg&occupationFirstLevels%5B%5D=H%C3%A5ndverkere&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Hjelpearbeider%20Bygg%20og%20anlegg&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Arbeidsleder%2C%20bygg%20og%20anlegg&occupationSecondLevels%5B%5D=Bygg%20og%20anlegg.Maskin-%20og%20kranf%C3%B8rer">
                                Ремісник
                            </DsLink>
                            <br />
                            Наприклад: будівельник, тесляр, маляр, електрик, сантехнік
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            <DsLink href="/stillinger?q=english&occupationFirstLevels%5B%5D=Industri%20og%20produksjon&occupationFirstLevels%5B%5D=Natur%20og%20milj%C3%B8&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Jordbruk%20og%20dyrehold&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Skogbruk%2C%20gartnerarbeid%20og%20hagebruk&occupationSecondLevels%5B%5D=Natur%20og%20milj%C3%B8.Fiske%2C%20fangst%20og%20oppdrett&occupationSecondLevels%5B%5D=Industri%20og%20produksjon.Matproduksjon%20og%20n%C3%A6ringsmiddelarbeid">
                                Сільське господарство
                            </DsLink>
                            <br />
                            Наприклад: рибалка, фермер
                        </BodyLong>
                    </li>
                </ul>

                <Heading level="2" size="large" spacing id="salary">
                    Отримання зарплати та ознайомлювальна програма
                </Heading>
                <Heading level="3" size="medium" spacing>
                    Чи можу я працювати, беручи участь у ознайомлювальній програмі?
                </Heading>
                <BodyLong spacing>
                    Так, ви можете комбінувати роботу з ознайомлювальною програмою. Будь ласка, відвідайте веб-сторінки
                    IMDi для отримання додаткової інформації.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.imdi.no/en/information-to-refugees-from-the-ukraine/">
                        Інформація для біженців з України (Інформація англійською мовою)
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Податкова картка
                </Heading>
                <BodyLong spacing>
                    Кожен, хто працює в Норвегії, повинен мати податкову картку. Податкова картка – це електронний
                    документ, який показує скільки податків повинен утримати Ваш роботодавець, перш ніж виплатити Вам
                    зарплату.
                </BodyLong>
                <BodyLong spacing>
                    Ви можете попросити свого роботодавця подати заяву для отримання податкової картки на Вас, або
                    подати заяву самостійно.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards/">
                        Як оформити податкову картку (Інформація англійською мовою)
                    </DsLink>
                </BodyLong>
                <Heading level="3" size="medium" spacing>
                    Банківський рахунок
                </Heading>
                <BodyLong spacing>
                    Для того, щоб отримувати зарплату, оплачувати рахунки або отримувати інші виплати потрібен
                    банківський рахунок. Ви самі вибираєте яким банком користуватиметеся.
                </BodyLong>
                <BodyLong spacing>
                    Більшість банків у Норвегії вимагають Ваш ідентифікаційний номер (D-номер), підтвердження місця
                    проживання та документ що підтверджує особу . Ви можете зв’язатися з вибраним банком для отримання
                    додаткової інформації.
                </BodyLong>
                <BodyLong className="mb-3">
                    <DsLink href="https://www.finansportalen.no/bank/dagligbank/">
                        Знайдіть банк, який вам підходить (Інформація норвезькою мовою)
                    </DsLink>
                </BodyLong>

                <Heading level="2" size="large" spacing id="support">
                    Підтримка від Норвезького управління праці та соціального забезпечення (NAV)
                </Heading>
                <BodyLong spacing>
                    Якщо Вам надали колективний захист, Ви можете мати право на допомогу від NAV.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nav.no/ukraina/uk">Інформація від NAV для біженців з України</DsLink>
                </BodyLong>
                <BodyLong spacing>
                    Якщо Ви працюєте в Норвегії, Ви автоматично стаєте членом Норвезької національної страхової системи
                    з першого дня роботи.
                </BodyLong>
                <BodyLong spacing>
                    Як член Норвезької національної страхової системи, NAV відповідає за Ваші права на сімейні виплати,
                    пенсію, щодо стану здоров’я та багато іншого.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits">
                        Прочитайте про послуги та переваги від NAV (Інформація англійською мовою)
                    </DsLink>
                </BodyLong>
            </article>
        </Layout>
    );
}
