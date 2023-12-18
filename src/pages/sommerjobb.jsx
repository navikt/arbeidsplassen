import { BodyLong, Heading, Link, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import ImageLinkPanelMedium from "@/src/common/components/ImageLinkPanelMedium";
import React from "react";

export default function Sommerjobb() {
    return (
        <Layout variant="company">
            <Head>
                <title>Lys ut sommerjobber - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Nå kan du gi ungdom en sjanse – lys ut sommerjobber
                </Heading>
            </div>

            <div className="container-medium mb-12">
                <img
                    className="article-image"
                    src="/images/sommerjobb.png"
                    alt="En kunde får servert en burger fra en food truck"
                    width="100%"
                />
            </div>

            <div className="container-small mb-16">
                <BodyLong spacing>
                    Mange unge trenger å få arbeidserfaring. Kan du være med på å gi dem en sjanse ved å lyse ut én
                    eller flere sommerjobber i år?
                </BodyLong>
                <BodyLong>Her har du noen gode argumenter for hvorfor dere bør ta inn sommervikarer:</BodyLong>
                <ul className="mb-12">
                    <li>
                        <BodyLong>
                            Arbeidserfaring blir mer og mer viktig. Derfor kan en relevant sommerjobb se veldig bra ut
                            på CV-en. For mange er sommerjobb det første møtet med arbeidslivet.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Sommervikarene hjelper til med å holde hjulene i gang gjennom ferieavviklingen.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Sommervikarene kan ta tak i noen av de prosjektene som har blitt liggende på vent eller som
                            har blitt utsatt.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Sommervikariat er en god rekrutteringsmulighet for videre fast ansettelse.</BodyLong>
                    </li>
                </ul>

                <BodyLong spacing>
                    Alle virksomheter med behov for ferievikarer og ekstrahjelp er velkomne til å lyse ut sine
                    stillinger på arbeidsplassen.no. Vi anbefaler bedrifter å lyse ut stillinger offentlig. Da får flest
                    mulig vite om stillingene. Tjenestene på arbeidsplassen.no er kostnadsfrie.
                </BodyLong>
                <BodyLong className="mb-12">
                    <Link href="/skikkelig-bra-stillingsannonse">
                        Les mer om hvordan du kan lage en treffsikker stillingsannonse.
                    </Link>
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Hvordan skal jobbsøkerne finne nettopp din sommerjobbannonse?
                </Heading>
                <BodyLong>Her følger fire tips:</BodyLong>
                <ol className="mb-12">
                    <li>
                        <BodyLong>Huk av for "feriejobb" i filter for ansettelsesform.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Vær tydelig i annonseteksten at du lyser ut sommerjobb. Skriv det gjerne i
                            annonseoverskriften.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Vekk interesse! Bruk et språk som går mer hjem blant de unge.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Velg <Link href="/superrask-soknad-bedrift">superrask søknad</Link> som kontaktform. Det er
                            en enkel måte for unge å komme i kontakt med deg, uten CV og et langt søknadsbrev. CV kan du
                            be om senere i en samtale.
                        </BodyLong>
                    </li>
                </ol>

                <BodyLong className="mb-12">Lykke til med utlysningen!</BodyLong>

                <LinkPanel className="arb-link-panel-primary" href="/stillingsregistrering/stillingsannonser">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Lag ny stillingsannonse
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-24">
                <Heading size="large" level="2" spacing>
                    Videre lesning
                </Heading>
                <div className="image-link-panel-grid-medium">
                    <ImageLinkPanelMedium
                        image="/images/bedrift.jpg"
                        alt="En mann sitter på et kontor og tar en annen i hånden"
                        title="Nyhet! Superrask Søknad"
                        description="En enklere måte å komme i kontakt med relevante jobbsøkere."
                        href="/superrask-soknad-bedrift"
                        color="secondary"
                    />
                    <ImageLinkPanelMedium
                        image="/images/api.png"
                        alt="API, illustrasjon"
                        title="Overføring av stillingsannonser til arbeidsplassen.no"
                        description="NAVs import-API er utviklet for at det skal være enkelt å publisere stillinger på
                                    arbeidsplassen.no for våre samarbeidspartnere."
                        href="/overforing-av-stillingsannonser"
                        color="tertiary"
                    />
                </div>
            </div>
        </Layout>
    );
}
