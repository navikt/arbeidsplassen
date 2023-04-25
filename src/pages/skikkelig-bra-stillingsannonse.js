import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import ImageLinkPanelArticle from "@/src/common/components/ImageLinkPanelArticle";
import React from "react";

export default function SkikkeligBraStillingsannonse() {
    return (
        <Layout>
            <Head>
                <title>Hvordan skriver du en skikkelig bra stillingsannonse? - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Hvordan skriver du en skikkelig bra stillingsannonse?
                </Heading>

                <Ingress spacing>
                    Hva ser jobbsøkere etter når de leser en stillingsannonse? Hva bør du tenke på når du skriver
                    annonsen?
                </Ingress>
            </div>

            <div className="container-medium mb-3">
                <img
                    className="article-image"
                    src="/images/stillingsannonse.jpg"
                    alt="Person som skriver på en skrivemaskin"
                    width="100%"
                />
            </div>

            <div className="container-small mb-4">
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
                        <BodyLong>Bruk aktive setninger. Hvis teksten fungerer muntlig, er det et godt tegn.</BodyLong>
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
                            Det er ikke nødvendig å skrive mye om bedriften. Oppgi lenke til bedriftens nettside, her
                            kan interesserte lese seg opp.
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
                    Bruker du maskuline ord slik som «solid utdannelse», «strategisk» og «handlekraftig»? Eller feminine
                    ord slik som «relasjonsorientert», «dialogorientert» og «gode kommunikasjonsevner»?
                </BodyLong>
                <BodyLong className="mb-3">
                    Du bør ha et bevisst forhold til de ordene du bruker når du skriver stillingsannonser, ellers kan du
                    faktisk risikere å ikke finne den beste kandidaten til jobben.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Tilpass kravene dine
                </Heading>
                <BodyLong spacing>
                    Er du i en posisjon der du kan ønske deg søkere som både har høy kompetanse og mye erfaring? Eller
                    bør du formulere deg slik at interesserte som ikke innfrir alle krav forstår at de kan være
                    interessante?
                </BodyLong>
                <BodyLong spacing>
                    Er det viktigst å legge vekt på kravene i stillingsbeskrivelsen, eller å fremheve mulighetene som
                    kan by seg for rett person? Du kan styre responsen gjennom ordene du velger og hva du legger vekt
                    på.
                </BodyLong>
                <BodyLong className="mb-3">
                    Krever jobben mye reising, eller har spesielle arbeidstider, så husk å oppgi det.
                </BodyLong>

                <LinkPanel
                    className="arb-primary-bg-text arb-link-panel"
                    href="/stillingsregistrering/stillingsannonser"
                >
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Lag ny stillingsannonse
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-6">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="article-link-panel-grid">
                    <ImageLinkPanelArticle
                        className="arb-primary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/bedrift.jpg"
                        title="Nyhet! Superrask Søknad"
                        description="En enklere måte å komme i kontakt med relevante jobbsøkere."
                        href="/superrask-soknad-bedrift"
                    />
                    <ImageLinkPanelArticle
                        className="arb-secondary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/api.png"
                        title="Overføring av stillingsannonser til arbeidsplassen.no"
                        description="NAVs import-API er utviklet for at det skal være enkelt å publisere stillinger på
                                    arbeidsplassen.no for våre samarbeidspartnere."
                        href="/overforing-av-stillingsannonser"
                    />
                </div>
            </div>
        </Layout>
    );
}
