import { BodyLong, Heading, LinkPanel, List, Link as AkselLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <Layout variant="company">
            <Head>
                <title>
                    Nå er det enklere enn noensinne å skrive gode kvalifikasjoner og overskrifter til din jobbannonse -
                    arbeidsplassen.no
                </title>
                <meta
                    property="og:title"
                    content="Nå er det enklere enn noensinne å skrive gode kvalifikasjoner til din jobbannonse"
                />
                <meta
                    property="og:description"
                    content="Arbeidsgivere som velger å bruke superrask søknad, kan nå få forslag til kvalifikasjoner ved
                        hjelp av kunstig intelligens."
                />
                <meta property="og:image" content="https://arbeidsplassen.nav.no/images/dog-some.png" />
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="container-small">
                    <Heading size="xlarge" level="1" spacing>
                        Nå er det enklere enn noensinne å skrive gode kvalifikasjoner og overskrifter til din
                        jobbannonse
                    </Heading>
                    <BodyLong size="large" spacing>
                        Arbeidsgivere som oppretter en annonse på arbeidsplassen.no, kan nå få forslag til
                        kvalifikasjoner og overskrifter ved hjelp av kunstig intelligens.
                    </BodyLong>
                </div>
                <div className="container-medium mb-12">
                    <img
                        className="article-image"
                        src="/images/dog.png"
                        alt="Glad hund som som sitter ved kjøkkenbordet og ser på en person som fyller ut superrask søknad."
                    />
                </div>
                <div className="container-small">
                    <BodyLong spacing>
                        Vi ønsker å gjøre det enklere for arbeidsgivere å formidle hva de ser etter, og for jobbsøkere å
                        vurdere om de er aktuelle for en stilling. Derfor har vi nå lansert tjenester som benytter seg
                        av KI (kunstig intelligens) til å foreslå gode kvalifikasjoner og overskrifter basert på
                        informasjonen som du har lagt inn i jobbannonsen.
                    </BodyLong>
                    <Heading size="large" level="2" spacing>
                        Slik fungerer det
                    </Heading>
                    <List title="For kvalifikasjoner" headingTag="h3" className="mb-6">
                        <List.Item>
                            Når du velger å{" "}
                            <Link href="/superrask-soknad-bedrift" passHref legacyBehavior>
                                <AkselLink>motta søknader med superrask søknad</AkselLink>
                            </Link>
                            , kan du få forslag på kvalifikasjoner basert på annonseteksten du har skrevet inn.
                        </List.Item>
                        <List.Item>Vi bruker kun teksten om stillingen for å foreslå kvalifikasjoner.</List.Item>
                    </List>
                    <List title="For overskrifter" headingTag="h3" className="mb-12">
                        <List.Item>
                            Du kan velge å få forslag til overskrift basert på yrke, geografi og annonseteksten du har
                            skrevet inn.
                        </List.Item>
                        <List.Item>
                            Forslagene kan brukes som de blir foreslått eller som inspirasjon hvis du vil lage en egen
                            overskrift.
                        </List.Item>
                    </List>
                    <BodyLong spacing>Det er helt frivillig å ta i bruk disse tjenestene.</BodyLong>
                    <BodyLong spacing>
                        Din informasjon vil ikke brukes til å trene KI eller sendes videre til andre aktører. Tjenestene
                        vil følge og sikre{" "}
                        <Link href="/retningslinjer-stillingsannonser" passHref legacyBehavior>
                            <AkselLink>våre retningslinjer</AkselLink>
                        </Link>{" "}
                        for diskriminerende innhold, som for eksempel kjønn, etnisitet og alder.
                    </BodyLong>
                    <BodyLong className="mb-12">
                        Vi jobber stadig med å finne ut av hvordan vi kan hjelpe jobbsøkere og arbeidsgivere med å finne
                        hverandre og ser at KI kan skape nye spennende muligheter. Dette er et første steg og vi vil
                        fortsette å utforske nye måter å gjøre det enklere for både jobbsøkere og arbeidsgivere.
                    </BodyLong>

                    <LinkPanel className="arb-link-panel-primary" href="/stillingsregistrering/stillingsannonser">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Lag ny stillingsannonse
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </div>
        </Layout>
    );
}
