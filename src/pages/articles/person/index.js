import { Heading, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import IllustrationArticle from "@/src/common/components/images/IllustrationArticle";
import Head from "next/head";

export default function ArticlePagePerson() {
    return (
        <Layout>
            <Head>
                <title>Nyttige artikler for jobbsøkere - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Heading className="mb-4" size="xlarge" level="1">
                        Nyttige artikler for jobbsøkere
                    </Heading>
                    <div className="mb-3">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <section className="mb-6">
                        <div className="arb-link-panel-grid mb-2">
                            <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/jobbe-i-utlandet">
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Jobbe i utlandet?
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å
                                    finne en jobb i EU-/EØS-området og Sveits.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-secondary-bg-text arb-link-panel"
                                href="/articles/person/superrask-soknad-person"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Nyhet! Superrask Søknad
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    En enklere måte å komme i kontakt med bedrifter.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-tertiary-bg-text arb-link-panel"
                                href="/articles/person/tips-til-jobbsoknaden"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Tips til jobbsøknaden
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Her får du våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til
                                    å møte akkurat deg.
                                </LinkPanel.Description>
                            </LinkPanel>
                            <LinkPanel
                                className="arb-primary-bg-text arb-link-panel"
                                href="/articles/person/jobbtreff-person"
                            >
                                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                                    Jobbtreff – møt bedrifter på en ny måte
                                </LinkPanel.Title>
                                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                                    Følg en direkte sending der bedriften forteller om seg selv og hva slags stillinger
                                    du kan søke på.
                                </LinkPanel.Description>
                            </LinkPanel>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
