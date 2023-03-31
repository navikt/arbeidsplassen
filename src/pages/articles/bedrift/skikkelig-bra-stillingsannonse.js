import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import IllustrationArticle from "../../../common/components/images/IllustrationArticle";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function skikkeligBraStillingsannonse() {
    return (
        <Layout>
            <div className="page-margin-top-and-bottom">
                <article className="article">
                    <Link href="/bedrift" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til bedrift
                    </Link>
                    <Heading size="xlarge" level="1" spacing>
                        Hvordan skriver du en skikkelig bra stillingsannonse?
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Hva ser jobbsøkere etter når de leser en stillingsannonse? Hva bør du tenke på når du skriver
                        annonsen?
                    </Ingress>

                    <div className="mb-3">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <Heading size="large" level="2" spacing>
                        Fang interessen og gjør annonsen lett å lese
                    </Heading>
                    <BodyLong spacing>
                        Mange leser stillingsannonser fra mobilen. Kanskje sitter de på bussen og scroller raskt gjennom
                        dagens nye stillinger. Tenk på det når du lager stillingsannonsen.
                    </BodyLong>
                    <ul className="mb-3">
                        <li>
                            <BodyLong>Førsteinntrykket er viktig.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Jobb med overskriften, den skal vekke interesse.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Kom raskt til poenget.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Standardfraser og klisjeer kan virke gammeldags.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Bruk aktive setninger. Hvis teksten fungerer muntlig, er det et godt tegn.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>Unngå lange avsnitt.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Ikke vær redd for å sette punktum. Korte setninger er bra.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Løs opp teksten med kulepunkter hvis det passer.</BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing>
                        Vis at dere er en attraktiv arbeidsplass
                    </Heading>
                    <BodyLong>
                        De beste kandidatene velger deg fordi de blir motivert og kan identifisere seg med bedriftens
                        verdier og policy.
                    </BodyLong>
                    <ul className="mb-3">
                        <li>
                            <BodyLong>Tenk på hva du står for og vis hvordan du skiller deg ut.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>Er det gode utviklingsmuligheter i bedriften? Fortell om det.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Det er ikke nødvendig å skrive mye om bedriften. Oppgi lenke til bedriftens nettside,
                                her kan interesserte lese seg opp.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing>
                        Tenk over hvilke ord du bruker
                    </Heading>
                    <BodyLong spacing>
                        Det er kanskje ikke noe du tenker så mye over, men ordene i annonsen din kan være avgjørende for
                        hvem som søker på jobben.
                    </BodyLong>
                    <BodyLong spacing>
                        Bruker du maskuline ord slik som «solid utdannelse», «strategisk» og «handlekraftig»? Eller
                        feminine ord slik som «relasjonsorientert», «dialogorientert» og «gode kommunikasjonsevner»?
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Du bør ha et bevisst forhold til de ordene du bruker når du skriver stillingsannonser, ellers
                        kan du faktisk risikere å ikke finne den beste kandidaten til jobben.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Tilpass kravene dine
                    </Heading>
                    <BodyLong spacing>
                        Er du i en posisjon der du kan ønske deg søkere som både har høy kompetanse og mye erfaring?
                        Eller bør du formulere deg slik at interesserte som ikke innfrir alle krav forstår at de kan
                        være interessante?
                    </BodyLong>
                    <BodyLong spacing>
                        Er det viktigst å legge vekt på kravene i stillingsbeskrivelsen, eller å fremheve mulighetene
                        som kan by seg for rett person? Du kan styre responsen gjennom ordene du velger og hva du legger
                        vekt på.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Krever jobben mye reising, eller har spesielle arbeidstider, så husk å oppgi det.
                    </BodyLong>

                    <LinkPanel
                        className="arb-primary-bg-text arb-link-panel"
                        href="https://arbeidsplassen.nav.no/stillingsregistrering/stillingsannonser"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Lag ny stillingsannonse
                        </LinkPanel.Title>
                    </LinkPanel>
                </article>
            </div>
        </Layout>
    );
}
