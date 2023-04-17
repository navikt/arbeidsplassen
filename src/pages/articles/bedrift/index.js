import { Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import IllustrationArticle from "@/src/common/components/images/IllustrationArticle";
import Head from "next/head";

export default function ArticlePageBedrift() {
    return (
        <Layout>
            <Head>
                <title>Nyttige artikler for bedrifter - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Heading className="mb-4" size="xlarge" level="1">
                        Nyttige artikler for bedrifter
                    </Heading>
                    <div className="mb-2">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <section className="mb-6">
                        --
                        <div className="arb-link-panel-grid mb-2">
                            <LinkPanel
                                className="arb-primary-bg-text arb-link-panel"
                                href="/skikkelig-bra-stillingsannonse"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Skikkelig bra stillingsannonse
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Hva ser jobbsøkere etter når de leser en stillingsannonse? Hva bør du tenke på når
                                    du skriver annonsen?
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-secondary-bg-text arb-link-panel"
                                href="/superrask-soknad-bedrift"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Nyhet! Superrask Søknad
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    En enklere måte å komme i kontakt med relevante jobbsøkere.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel className="arb-tertiary-bg-text arb-link-panel" href="/jobbtreff-bedrift">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Jobbtreff – møt jobbsøkere på en ny måte
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Trenger dere nye medarbeidere? Nå kan du presentere bedriften din for interesserte
                                    jobbsøkere i en direkte sending.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-primary-bg-text arb-link-panel"
                                href="/overforing-av-stillingsannonser"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Overføring av stillingsannonser til arbeidsplassen.no
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    NAVs import-API er utviklet for at det skal være enkelt å publisere stillinger på
                                    arbeidsplassen.no for våre samarbeidspartnere.
                                </LinkPanel.Description>
                            </LinkPanel>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
