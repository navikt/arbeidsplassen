import { BodyLong, Heading, Link as AkselLink } from "@navikt/ds-react";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import NextLink from "next/link";

export default function RetningslinjerJobbtreff() {
    return (
        <article className="container-small page-margin-top-and-bottom">
            <AkselLink as={NextLink} href="/vilkar-og-retningslinjer" className="mb-8">
                <ChevronLeftIcon aria-hidden="true" />
                Til Vilkår og retningslinjer
            </AkselLink>

            <Heading spacing size="xlarge" level="1">
                Retningslinjer for innhold i jobbtreff på arbeidsplassen.no
            </Heading>

            <Heading size="large" level="2" spacing>
                1. Innledning
            </Heading>
            <BodyLong spacing>
                Formålet med disse retningslinjene er å bidra til å kvalitetssikre NAVs digitale tjeneste, Jobbtreff,
                som er en møteplass for arbeidsgivere og arbeidssøkere på arbeidsplassen.no. Jobbtreff gir arbeidsgivere
                mulighet til å fortelle om seg selv og jobbmuligheter de kan tilby, samtidig som arbeidssøkere får
                muligheten til å bli kjent med arbeidsgiver før de søker på ledige stillinger.
            </BodyLong>
            <BodyLong spacing>Retningslinjene angir generelle krav til innholdet i et jobbtreff.</BodyLong>
            <BodyLong className="mb-12">
                Det er en forutsetning for opprettelse av jobbtreff på arbeidsplassen.no at arbeidsgiver har et konkret
                rekrutterings-/ansettelsesbehov.
            </BodyLong>

            <Heading size="large" level="2" spacing>
                2. Bemanningsforetak / rekrutteringsbyrå
            </Heading>
            <BodyLong className="mb-12">
                Det er en forutsetning at bemanningsforetak skal være registrert hos Arbeidstilsynet, jf. forskrift om
                bemanningsforetak §§ 5 og 6. For at et bemanningsforetak/rekrutteringsbyrå skal kunne opprette jobbtreff
                på arbeidsplassen.no er det en forutsetning at virksomheten er godkjent av Arbeidstilsynet.
            </BodyLong>

            <Heading size="large" level="2" spacing>
                3. Renholdsvirksomheter
            </Heading>
            <BodyLong className="mb-12">
                Renholdsvirksomheter som driver virksomhet i Norge må også være godkjent av Arbeidstilsynet, jf.
                «Forskrift om offentlig godkjenning av renholdsvirksomheter og kjøp av renholdstjenester» § 3. For at
                renholdsvirksomheter skal kunne opprette jobbtreff på arbeidsplassen.no er det en forutsetning at
                virksomheten er godkjent av Arbeidstilsynet.
            </BodyLong>

            <Heading size="large" level="2" spacing>
                4. Ulovlig diskriminerende innhold
            </Heading>
            <BodyLong className="mb-12">
                Jobbtreff som har diskriminerende innhold, skal ikke opprettes på arbeidsplassen.no. Det er ved
                ansettelser ulovlig å forskjellsbehandle arbeidssøkere på grunnlag av kjønn, religion, livssyn,
                hudfarge, nasjonal eller etnisk opprinnelse, politisk syn, medlemskap i arbeidstakerorganisasjon,
                seksuell orientering, funksjonshemming eller alder. Forbudet omfatter også indirekte diskriminering; for
                eksempel at det stilles krav om gode norskkunnskaper eller avtjent verneplikt, uten at slike krav er
                nødvendige for å utføre stillingens arbeidsoppgaver på en forsvarlig måte.
            </BodyLong>

            <Heading size="large" level="2" spacing>
                5. Ulovlig arbeid
            </Heading>
            <BodyLong className="mb-12">
                Jobbtreff som presenterer stillinger som går ut på å utføre ulovlige aktiviteter/arbeid (f.eks. ulovlig
                spillevirksomhet som pokerspill eller pyramidespill), eller hvor det kommer frem av innholdet at
                arbeidsgiver bryter bestemmelser i arbeidsmiljøloven knyttet til sikkerhet, arbeidstid, arbeidskontrakt
                eller liknende, skal ikke opprettes på arbeidsplassen.no.
            </BodyLong>

            <Heading size="large" level="2" spacing>
                6. Lovlig arbeid hvor jobbtreff ikke kan benyttes
            </Heading>
            <BodyLong spacing>
                Arbeidsgivere som presenterer arbeid som omfatter aktiviteter som krever nakenhet eller er av seksuell
                eller pornografisk karakter kan ikke opprette jobbtreff. Dette gjelder selv om arbeidet er lovlig.
                Eksempler på slikt arbeid er stripping, toppløs servering og telefonsex. NAV er pålagt å unnlate å
                registrere slike stillinger, av hensyn til personer som kan oppfatte slike stillinger som
                støtende/krenkende.
            </BodyLong>

            <Heading size="medium" level="3" spacing>
                Melding til arbeidsgiver når jobbtreff slettes eller avvises
            </Heading>
            <BodyLong spacing>
                Dersom NAV har avpublisert et jobbtreff som er registrert av arbeidsgiver på arbeidsplassen.no på grunn
                av brudd med disse retningslinjene, vil NAV ta kontakt med arbeidsgiver slik at de kan rette innholdet i
                jobbtreffet og få mulighet til å publisere på nytt.
            </BodyLong>
            <BodyLong>Det vises også til retningslinjer for stillingsregistrering på arbeidsplassen.no</BodyLong>
        </article>
    );
}
