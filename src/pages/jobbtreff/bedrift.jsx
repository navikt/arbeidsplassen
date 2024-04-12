import { getMetadataTitle } from "@/src/modules/layout";
import Head from "next/head";
import Layout from "@/src/common/components/layout/Layout";
import { BodyLong, Button, Heading } from "@navikt/ds-react";
import FigureSleeping from "@/src/common/components/FigureSleeping";

export const metadata = {
    title: getMetadataTitle("Jobbtreff"),
};

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <div className="container-small mt-10 mb-24 text-center">
                <Heading size="xlarge" level="1" spacing>
                    Jobbtreff
                </Heading>
                <BodyLong>
                    Tjenesten ble avsluttet 24. mai 2024, fordi bruken rett og slett var for lav til å forsvare videre
                    drift. Vi forstår at dette kan være skuffende, men vi er mer engasjert enn noensinne i å utvikle og
                    forbedre våre tilbud til deg som ser etter nye medarbeidere.
                </BodyLong>

                <div className="mt-12 mb-6">
                    <FigureSleeping />
                </div>

                <BodyLong spacing>
                    Trenger du nye medarbeidere? Opprett en stillingsannonse i dag og bli synlig i ett av Norges største
                    stillingssøk!
                </BodyLong>
                <Button variant="primary" as="a" href="/stillingsregistrering/stillingsannonser">
                    Lag ny annonse
                </Button>
            </div>
        </Layout>
    );
}
