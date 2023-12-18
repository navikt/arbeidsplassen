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
                    Nå er det enklere enn noensinne å skrive gode kvalifikasjoner til din jobbannonse -
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
                        Nå er det enklere enn noensinne å skrive gode kvalifikasjoner til din jobbannonse
                    </Heading>
                    <BodyLong size="large" spacing>
                        Arbeidsgivere som velger å bruke superrask søknad, kan nå få forslag til kvalifikasjoner ved
                        hjelp av kunstig intelligens.
                    </BodyLong>
                </div>
                <div className="container-medium mb-12">
                    <img
                        className="article-image"
                        src="/images/dog.png"
                        alt="Glad hund som som sitter ved kjøkkenbordet og ser på en person som fyller ut superrask søknad."
                        width="100%"
                    />
                </div>
                <div className="container-small">
                    <BodyLong spacing>
                        Vi ønsker å gjøre det enklere for arbeidsgivere å formidle hva de ser etter, og for jobbsøkere å
                        vurdere om de er aktuelle for en stilling. Derfor har vi nå lansert en tjeneste som benytter seg
                        av KI (kunstig intelligens) til å foreslå gode kvalifikasjoner basert på informasjonen som du
                        har lagt inn i jobbannonsen.
                    </BodyLong>
                    <List title="Slik fungerer det" headingTag="h2">
                        <List.Item>
                            Når du velger å{" "}
                            <Link href="/superrask-soknad-bedrift" passHref legacyBehavior>
                                <AkselLink>motta søknader med superrask søknad</AkselLink>
                            </Link>
                            , kan du få forslag på kvalifikasjoner basert på annonseteksten du har skrevet inn. Det er
                            helt frivillig å ta i bruk denne tjenesten.
                        </List.Item>
                        <List.Item>
                            Vi bruker kun teksten om stillingen for å foreslå kvalifikasjoner. Teksten vil ikke brukes
                            til å trene KI eller sendes videre til andre aktører.
                        </List.Item>
                        <List.Item>
                            Tjenesten vil følge og sikre{" "}
                            <Link href="/retningslinjer-stillingsannonser" passHref legacyBehavior>
                                <AkselLink>våre retningslinjer</AkselLink>
                            </Link>{" "}
                            for diskriminerende innhold, som for eksempel kvalifikasjoner rundt kjønn, etnisitet og
                            alder.
                        </List.Item>
                    </List>
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
