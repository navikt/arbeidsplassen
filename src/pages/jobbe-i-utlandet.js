import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import IllustrationArticle from "@/src/common/components/images/IllustrationArticle";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function jobbeiUtlandet() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-2">
                        <Link href="/">
                            <ChevronLeftIcon aria-hidden="true" />
                            Til forsiden
                        </Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Jobbe i utlandet
                    </Heading>

                    <Ingress className="arb-ingress-xlarge" spacing>
                        Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb i
                        EU-/EØS-området og Sveits.
                    </Ingress>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <Heading size="large" level="2" spacing>
                        Hva kan jeg gjøre på EURES-portalen?
                    </Heading>
                    <BodyLong spacing>
                        På portalen kan du søke etter ledige stillinger. Du kan også gjøre CV-en din tilgjengelig for
                        arbeidsgivere som søker nye medarbeidere.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Dersom du er statsborger i et EU/EØS-land eller Sveits kan du eksportere CV-en du har på
                        arbeidsplassen.no til EURES-portalen.
                    </BodyLong>

                    <LinkPanel
                        className="arb-secondary-bg-text arb-link-panel"
                        href="https://ec.europa.eu/eures/public/index_no"
                    >
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Gå til EURES-portalen
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </div>
        </LayoutArticles>
    );
}
