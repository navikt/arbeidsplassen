import { BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function workInNorway() {
    return (
        <Layout>
            <Head>
                <title>Ønsker du å rekruttere flyktninger? - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <Heading size="large" level="2" spacing>
                    Ønsker du å rekruttere flyktninger?
                </Heading>
                <BodyLong spacing>
                    Alle flyktninger med skriftlig vedtak om opphold- og arbeidstillatelse fra UDI kan starte i arbeid.
                </BodyLong>
                <BodyLong spacing>
                    Vi anbefaler å <DsLink href="/stillingsregistrering/stillingsannonser">lyse ut stillinger</DsLink>{" "}
                    på arbeidsplassen.no eller <DsLink href="/jobbtreff/bedrift">invitere til jobbtreff</DsLink> og
                    presentere dine rekrutteringsbehov i en direkte sending for jobbsøkere. Begge tjenestene er gratis.
                </BodyLong>
                <BodyLong spacing>
                    Husk å informere om språkkrav for stillingen og skrive annonsen eller jobbtreffet på engelsk hvis
                    det er arbeidsspråket.
                </BodyLong>
                <BodyLong spacing>
                    <DsLink href="https://www.nav.no/arbeidsgiver/rekruttere-flyktninger">
                        NAVs råd for deg som ønsker å komme i kontakt med kvalifiserte kandidater
                    </DsLink>
                </BodyLong>
                <BodyLong>
                    <DsLink href="https://www.imdi.no/mangfold-i-arbeidslivet/">
                        Les om hvordan mangfold i arbeidslivet kan bidra til innovasjon, vekst og verdiskaping på
                        imdi.no
                    </DsLink>
                </BodyLong>
            </article>
        </Layout>
    );
}
