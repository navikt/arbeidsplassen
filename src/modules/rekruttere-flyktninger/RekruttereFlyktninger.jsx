import { BodyLong, Heading, Link as AkselLink } from "@navikt/ds-react";

export default function RekruttereFlyktninger() {
    return (
        <article className="container-small page-margin-top-and-bottom">
            <Heading size="large" level="2" spacing>
                Ønsker du å rekruttere flyktninger?
            </Heading>
            <BodyLong spacing>
                Alle flyktninger med skriftlig vedtak om opphold- og arbeidstillatelse fra UDI kan starte i arbeid.
            </BodyLong>
            <BodyLong spacing>
                Vi anbefaler å <AkselLink href="/stillingsregistrering/stillingsannonser">lyse ut stillinger</AkselLink>{" "}
                på arbeidsplassen.no eller <AkselLink href="/jobbtreff/bedrift">invitere til jobbtreff</AkselLink> og
                presentere dine rekrutteringsbehov i en direkte sending for jobbsøkere. Begge tjenestene er gratis.
            </BodyLong>
            <BodyLong spacing>
                Husk å informere om språkkrav for stillingen og skrive annonsen eller jobbtreffet på engelsk hvis det er
                arbeidsspråket.
            </BodyLong>
            <BodyLong spacing>
                <AkselLink href="https://www.nav.no/arbeidsgiver/rekruttere-flyktninger">
                    NAVs råd for deg som ønsker å komme i kontakt med kvalifiserte kandidater
                </AkselLink>
            </BodyLong>
            <BodyLong>
                <AkselLink href="https://www.imdi.no/mangfold-i-arbeidslivet/">
                    Les om hvordan mangfold i arbeidslivet kan bidra til innovasjon, vekst og verdiskaping på imdi.no
                </AkselLink>
            </BodyLong>
        </article>
    );
}
