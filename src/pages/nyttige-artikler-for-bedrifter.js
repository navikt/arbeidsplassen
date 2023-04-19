import { Heading } from "@navikt/ds-react";
import LayoutArticlePage from "@/src/common/components/layout/LayoutArticlePage";
import Head from "next/head";
import ImageLinkPanel from "@/src/common/components/ImageLinkPanel";

export default function ArticlePageBedrift() {
    return (
        <LayoutArticlePage>
            <Head>
                <title>Nyttige artikler for bedrifter - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <section className="arb-home-section-flex">
                    <section className="arb-home-div-width">
                        <div className="article-page">
                            <Heading className="mb-4 text-center" size="xlarge" level="1">
                                Nyttige artikler for bedrifter
                            </Heading>
                            <div className="arb-link-panel-grid">
                                <ImageLinkPanel
                                    href="/skikkelig-bra-stillingsannonse"
                                    image="/images/stillingsannonse.jpg"
                                    alt="Person som skriver på en skrivemaskin"
                                    title="Skikkelig bra stillingsannonse"
                                    description="Hva ser jobbsøkere etter når de leser en stillingsannonse? Hva bør du tenke på når
                                    du skriver annonsen?"
                                    className="arb-tertiary-bg-text arb-link-panel article-panel-link ml-4"
                                />
                                <ImageLinkPanel
                                    href="/superrask-soknad-bedrift"
                                    image="/images/bedrift.jpg"
                                    alt="En mann sitter på et kontor og tar en annen i hånden"
                                    title="Nyhet! Superrask Søknad"
                                    description="En enklere måte å komme i kontakt med relevante jobbsøkere."
                                    className="arb-primary-bg-text arb-link-panel article-panel-link ml-4"
                                />
                                <ImageLinkPanel
                                    href="/jobbtreff-bedrift"
                                    image="/images/jobbtreff.webp"
                                    alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                                    title="Jobbtreff – møt jobbsøkere på en ny måte"
                                    description="Trenger dere nye medarbeidere? Nå kan du presentere bedriften din for interesserte
                                    jobbsøkere i en direkte sending."
                                    className="arb-primary-solid-bg-text arb-link-panel article-panel-link ml-4"
                                />
                                <ImageLinkPanel
                                    href="/overforing-av-stillingsannonser"
                                    image="/images/api.png"
                                    alt="API, illustrasjon"
                                    title="Overføring av stillingsannonser til arbeidsplassen.no"
                                    description="NAVs import-API er utviklet for at det skal være enkelt å publisere stillinger på
                                    arbeidsplassen.no for våre samarbeidspartnere."
                                    className="arb-secondary-bg-text arb-link-panel article-panel-link ml-4"
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </LayoutArticlePage>
    );
}
