import { BodyLong, GuidePanel, Heading, Link } from "@navikt/ds-react";
import { useEffect } from "react";
import Icon from "@/pages/components/icons/Icon";
import HandHeart from "@/pages/components/icons/HandHeart";
import Search from "@/pages/components/icons/Search";
import Wallet from "@/pages/components/icons/Wallet";
import SocialAid from "@/pages/components/icons/SocialAid";
import LayoutArticles from "@/pages/components/layouts/LayoutArticles";

export default function workInNorwayEn() {
    useEffect(() => {
        document.documentElement.lang = "en";
    });
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="layout-toc">
                    <section className="mb-80">
                        <div className="arb-article">
                            <Heading className="text-center" size="xlarge" level="1" spacing>
                                Information about working in Norway for Ukrainian refugees
                            </Heading>
                        </div>
                        <div className="arb-article">
                            <ul className="refugees-grid">
                                <li>
                                    <BodyLong className="refugees-text-end">
                                        Information about working in Norway
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong>
                                        <Link href="/ua/work-in-norway">Інформація українською мовою</Link>
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong className="refugees-text-end">
                                        <Link href="/ru/work-in-norway">Информация на русском языке</Link>
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong>
                                        <Link href="/no/work-in-norway">Informasjon for arbeidsgivere</Link>
                                    </BodyLong>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="arb-article-section">
                        <div className="arb-article mb-108">
                            <Heading className="text-center" size="medium" level="2" spacing>
                                Important before you search
                            </Heading>
                            <ul className="numbered-list">
                                <li>
                                    <BodyLong spacing>
                                        You must have been granted{" "}
                                        <Link href="https://udi.no/en/information-ukraine-and-russia/situation-in-ukraine/stay-in-norway/protection-asylum-in-norway/">
                                            collective protection
                                        </Link>{" "}
                                        before you can start searching for and applying for jobs.
                                    </BodyLong>
                                </li>
                                <li>
                                    <BodyLong>
                                        When working in Norway it is important that you understand your rights and
                                        obligations as an employee. On this page you will find information about why you
                                        need a written work contract, tax deduction card and more.
                                    </BodyLong>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="arb-article-section">
                        <div className="arb-guide-panel-lofty">
                            <GuidePanel illustration={<Icon />} className="arb-guide-panel-lofty">
                                <Heading className="mb-2" size="small" level="3">
                                    Content
                                </Heading>
                                <BodyLong spacing>
                                    <Link href="#apply">How to apply for a job</Link>
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="#where">Where to find jobs</Link>
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="#salary">Receiving salary and the introduction program</Link>
                                </BodyLong>
                                <BodyLong>
                                    <Link href="#support">
                                        Support from the Norwegian Labour and Welfare Administration (NAV)
                                    </Link>
                                </BodyLong>
                            </GuidePanel>
                        </div>

                        <GuidePanel poster illustration={<HandHeart />} className="mb-4" id="apply">
                            <div className="arb-guide-panel-lofty">
                                <Heading size="medium" level="4" spacing className="text-center mb-2">
                                    Applying for a job
                                </Heading>

                                <Heading size="small" level="5" spacing>
                                    How to apply for a job
                                </Heading>
                                <BodyLong spacing>
                                    When you apply for a job, it is normal to include a CV, also sometimes called a
                                    resumé. A CV is a short document that describes your skills, job experience,
                                    language skills, education and certifications. You can search online for “how to
                                    write a CV”.
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="/articles/slik-skriver-du-en-god-cv">
                                        How to write a good CV (Norwegian language)
                                    </Link>
                                </BodyLong>
                                <BodyLong spacing>
                                    If the employer is interested in your application, they will invite you to an
                                    interview. This can be on the telephone, or a video meeting, or in person.
                                </BodyLong>
                                <BodyLong spacing>
                                    The interview is a chance for you and the employer to meet and decide whether the
                                    job is right for you. You can also ask questions about the job.
                                </BodyLong>

                                <Heading size="small" level="5" spacing>
                                    Can I use my education and certifications in Norway?
                                </Heading>
                                <BodyLong spacing>
                                    For most kinds of work in Norway, you do not need special permission to start
                                    working.
                                </BodyLong>
                                <BodyLong spacing>
                                    Some professions are however regulated and need approval/recognition from the
                                    Norwegian authorities.
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="https://www.nokut.no/en/foreign-education/list-of-regulated-professions/">
                                        List of regulated professions
                                    </Link>
                                </BodyLong>

                                <Heading size="small" level="5" spacing>
                                    Know your rights and obligations as an employee
                                </Heading>
                                <BodyLong spacing>
                                    Norway has many rules to make sure that you are not exploited, deceived or forced to
                                    work under illegal wage terms and working conditions. Everyone who works in Norway
                                    must have a written contract.
                                </BodyLong>
                                <BodyLong spacing>
                                    The wage level in Norway is higher than in many other countries and there is a
                                    minimum wage in several professions. There are rules to make sure that you do not
                                    work too much and receive compensation for overtime work.
                                </BodyLong>
                                <BodyLong>
                                    <Link href="https://www.arbeidstilsynet.no/en/knowyourrights/">
                                        Read about your rights and obligations as an employee in Norway
                                    </Link>
                                </BodyLong>
                            </div>
                        </GuidePanel>

                        <GuidePanel poster illustration={<Search />} className="mb-4" id="where">
                            <div>
                                <Heading size="medium" level="4" spacing className="text-center mb-2">
                                    Where to find jobs in Norway
                                </Heading>
                                <BodyLong spacing>
                                    <Link href="https://arbeidsplassen.nav.no/stillinger">
                                        Arbeidsplassen.no/stillinger
                                    </Link>{" "}
                                    is the largest database for job advertisements.
                                </BodyLong>
                                <BodyLong spacing>
                                    The following link will show jobs that are available for people who speak English:{" "}
                                    <Link href="https://arbeidsplassen.nav.no/stillinger?q=english">
                                        Job advertisements in English
                                    </Link>
                                </BodyLong>
                                <BodyLong spacing>
                                    You can use the left side of the job search page to limit the search results. For
                                    example, to only show jobs in your geographical area or only show part time jobs.
                                </BodyLong>
                                <Heading size="small" level="5" spacing>
                                    Industry specific searches:
                                </Heading>
                                <Link href="https://arbeidsplassen.nav.no/stillinger?q=english&occupationFirstLevels[]=IT">
                                    Available jobs in IT
                                </Link>
                                <BodyLong spacing>
                                    Example: designer, developer, data scientist, data architect
                                </BodyLong>
                                <Link href="https://arbeidsplassen.nav.no/stillinger?q=english&occupationFirstLevels[]=Salg%20og%20service&occupationFirstLevels[]=Reiseliv%20og%20mat">
                                    Available jobs in Food and beverage, cleaning, hospitality and sales
                                </Link>
                                <BodyLong spacing>
                                    Example: cook, waiter, cleaner, receptionist, shop assistant
                                </BodyLong>
                                <Link href="https://arbeidsplassen.nav.no/stillinger?q=english&occupationFirstLevels[]=Bygg%20og%20anlegg&occupationFirstLevels[]=H%C3%A5ndverkere&occupationSecondLevels[]=Bygg%20og%20anlegg.Hjelpearbeider%20Bygg%20og%20anlegg&occupationSecondLevels[]=Bygg%20og%20anlegg.Arbeidsleder%2C%20bygg%20og%20anlegg&occupationSecondLevels[]=Bygg%20og%20anlegg.Maskin-%20og%20kranf%C3%B8rer">
                                    Available jobs in Craftsworker
                                </Link>
                                <BodyLong spacing>
                                    Example: construction worker, carpenter, painter, electrician, plumber
                                </BodyLong>
                                <Link href="https://arbeidsplassen.nav.no/stillinger?q=english&occupationFirstLevels[]=Industri%20og%20produksjon&occupationFirstLevels[]=Natur%20og%20milj%C3%B8&occupationSecondLevels[]=Natur%20og%20milj%C3%B8.Jordbruk%20og%20dyrehold&occupationSecondLevels[]=Natur%20og%20milj%C3%B8.Skogbruk%2C%20gartnerarbeid%20og%20hagebruk&occupationSecondLevels[]=Natur%20og%20milj%C3%B8.Fiske%2C%20fangst%20og%20oppdrett&occupationSecondLevels[]=Industri%20og%20produksjon.Matproduksjon%20og%20n%C3%A6ringsmiddelarbeid">
                                    Available jobs in Agriculture
                                </Link>
                                <BodyLong>Example: fisher, farmer</BodyLong>
                            </div>
                        </GuidePanel>

                        <GuidePanel poster illustration={<Wallet />} className="mb-4" id="salary">
                            <div>
                                <Heading size="medium" level="4" spacing className="text-center mb-2">
                                    Receiving salary and the introduction program
                                </Heading>
                                <Heading size="small" level="5" spacing>
                                    Can I work while participating in the introduction program?
                                </Heading>
                                <BodyLong spacing>
                                    Yes, you can have paid employment as a part of your introduction program. Please
                                    visit IMDis webpages for more information.
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="https://www.imdi.no/en/english-pages/information-to-refugees-from-the-ukraine/">
                                        More information for refugees from Ukraine at imdi.no
                                    </Link>
                                </BodyLong>

                                <Heading size="small" level="5" spacing>
                                    Tax deduction card
                                </Heading>
                                <BodyLong spacing>
                                    Everyone who works in Norway must have a tax deduction card. A tax deduction card is
                                    an electronic document that shows how much tax your employer must deduct before they
                                    pay your salary.
                                </BodyLong>
                                <BodyLong spacing>
                                    You can ask your employer to apply for you, or you can apply for it yourself.
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards/">
                                        How to apply for a tax deduction card
                                    </Link>
                                </BodyLong>

                                <Heading size="small" level="5" spacing>
                                    Bank account
                                </Heading>
                                <BodyLong spacing>
                                    In order to receive your salary, pay bills or receive benefits, you need a bank
                                    account. It is your choice which bank you use.
                                </BodyLong>
                                <BodyLong spacing>
                                    Most banks in Norway will require your identification number (D-number), proof of
                                    identity and residency. You can contact your bank of choice for more information.
                                </BodyLong>
                                <Link href="https://www.finansportalen.no/bank/dagligbank/">
                                    Find a bank that suits you (Norwegian language)
                                </Link>
                            </div>
                        </GuidePanel>

                        <GuidePanel poster illustration={<SocialAid />} className="mb-4" id="support">
                            <div>
                                <Heading size="medium" level="4" spacing className="text-center mb-2">
                                    Support from the Norwegian Labour and Welfare Administration (NAV)
                                </Heading>
                                <BodyLong spacing>
                                    If you have been granted collective protection, you may be entitled to help from
                                    NAV.
                                </BodyLong>
                                <BodyLong spacing>
                                    <Link href="https://www.nav.no/ukraina">
                                        Information from NAV to refugees from Ukraine (Norwegian language)
                                    </Link>
                                </BodyLong>
                                <BodyLong spacing>
                                    If you are employed to work in Norway, you automatically become a member of the
                                    Norwegian National Insurance Scheme from your first day of work.
                                </BodyLong>
                                <BodyLong spacing>
                                    As a member of the Norwegian National Insurance Scheme, NAV is responsible for your
                                    entitlements regarding sickness, family related benefits, pension and many more.
                                </BodyLong>
                                <BodyLong>
                                    <Link href="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits">
                                        Read about NAV’s services and benefits
                                    </Link>
                                </BodyLong>
                            </div>
                        </GuidePanel>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
