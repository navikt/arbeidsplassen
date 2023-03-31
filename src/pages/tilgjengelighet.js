import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function tilgjengelighet() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <Link href="/" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til forsiden
                    </Link>

                    <Heading size="xlarge" level="1" spacing>
                        Tilgjengelighet
                    </Heading>
                    <BodyLong>
                        Arbeidsplassen.no er etter beste evne utviklet i tråd med forskrift om universell utforming av
                        IKT. Les vår{" "}
                        <Link href="https://uustatus.no/nb/erklaringer/publisert/9f7beaf9-ea64-4a93-8e20-8282f8fd1fce">
                            tilgjengelighetserklæring på uustatus.no
                        </Link>
                    </BodyLong>
                </div>
            </div>
        </LayoutArticles>
    );
}
