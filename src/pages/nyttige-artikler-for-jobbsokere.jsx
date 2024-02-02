import { Heading } from "@navikt/ds-react";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import ImageLinkPanelLarge from "@/src/common/components/ImageLinkPanelLarge";

export default function ArticlePagePerson() {
    return (
        <Layout>
            <Head>
                <title>Nyttige artikler for jobbsøkere - arbeidsplassen.no</title>
            </Head>
            <div className="container-medium page-margin-top-and-bottom">
                <section className="arb-home-section-flex">
                    <section className="arb-home-div-width">
                        <div className="article-page">
                            <Heading className="mb-16 text-center" size="xlarge" level="1">
                                Nyttige artikler for jobbsøkere
                            </Heading>

                            <div className="image-link-panel-grid-large">
                                <ImageLinkPanelLarge
                                    href="/superrask-soknad-person"
                                    image="/images/jobbsoker.jpg"
                                    alt="En person som skriver på mobilen sin."
                                    title="Superrask søknad"
                                    description="En enklere måte å komme i kontakt med bedrifter."
                                    color="primary"
                                />
                                <ImageLinkPanelLarge
                                    href="/tips-til-jobbsoknaden"
                                    image="/images/students.jpg"
                                    alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                                    title="Tips til jobbsøknaden"
                                    description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte deg."
                                    color="secondary"
                                />
                                <ImageLinkPanelLarge
                                    href="mot-bedrifter-pa-en-ny-mate"
                                    image="/images/jobbtreff.webp"
                                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                                    title="Jobbtreff – møt bedrifter på en ny måte"
                                    description="Følg en direkte sending der bedriften forteller om seg selv og hva slags stillinger du kan søke på."
                                    color="tertiary"
                                />
                                <ImageLinkPanelLarge
                                    href="jobbe-i-utlandet"
                                    image="/images/paris.jpg"
                                    alt="Bilde av Eiffeltårnet"
                                    title="Jobbe i utlandet?"
                                    description="Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
                                    color="primary"
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    );
}
