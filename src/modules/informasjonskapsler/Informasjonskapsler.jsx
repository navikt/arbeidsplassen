import { useContext, useRef } from "react";
import { Box, BodyLong, Heading, Link as AkselLink, List, Button, HGrid } from "@navikt/ds-react";
import NextLink from "next/link";
import CookieBannerContext from "@/src/common/contexts/CookieBannerContext";

export default function Informasjonskapsler() {
    const { openCookieBanner } = useContext(CookieBannerContext);
    const openCookieBannerButtonRef = useRef(null);

    const handleCookieOpenBanner = () => {
        openCookieBanner(openCookieBannerButtonRef.current);
    };

    return (
        <article className="container-small">
            <div>
                <div className="mt-5 mb-12">
                    <Heading size="xlarge" level="1" spacing>
                        Informasjonskapsler på arbeidsplassen.no
                    </Heading>

                    <BodyLong size="large" spacing>
                        Les om og endre innstillinger for informasjonskapsler på arbeidsplassen.no
                    </BodyLong>
                </div>

                <Box className="mb-12" padding="4" background="surface-alt-2-subtle">
                    <HGrid
                        gap="4"
                        align="center"
                        columns={{
                            xs: "1",
                            sm: "1",
                            md: "minmax(0, 50%) 1fr;",
                        }}
                    >
                        <div>
                            <Heading level="2" size="small">
                                Du har godtatt valgfrie informasjonskapsler
                            </Heading>
                        </div>
                        <div className="justfy-end-lg">
                            <Button ref={openCookieBannerButtonRef} onClick={handleCookieOpenBanner}>
                                Endre samtykket ditt
                            </Button>
                        </div>
                    </HGrid>
                </Box>
                <div className="mb-16">
                    <BodyLong spacing>
                        Informasjonskapsler (cookies og tilsvarende teknologier) er små tekstfiler som lagres på enheten
                        din når du bruker nettsiden vår. De hjelper oss å gi deg en bedre tjeneste ved å huske valgene
                        dine og sikre at alt fungerer, samt gi oss verdifull statistikk som hjelper oss forbedre
                        tjenestene over tid.
                    </BodyLong>

                    <BodyLong spacing>
                        Bruk av informasjonskapsler reguleres i{" "}
                        <AkselLink
                            as={NextLink}
                            href="https://lovdata.no/dokument/NL/lov/2024-12-13-76/KAPITTEL_3#%C2%A73-15"
                        >
                            ekomloven § 3-15
                        </AkselLink>
                        .
                    </BodyLong>
                    <BodyLong spacing>
                        Ønsker du informasjon om hvordan vi behandler personopplysninger?{" "}
                        <AkselLink as={NextLink} href="https://arbeidsplassen.nav.no/personvern">
                            Les personvernerklæringen vår
                        </AkselLink>
                        .
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="cookie-heading">
                        Nødvendige informasjonskapsler
                    </Heading>
                    <BodyLong spacing>
                        Noen informasjonskapsler er nødvendige for at arbeidsplassen.no skal fungere best mulig for deg.
                        De:
                    </BodyLong>
                    <List aria-labelledby="cookie-heading">
                        <List.Item>sikrer at nettsiden fungerer teknisk</List.Item>
                        <List.Item>beskytter sikkerheten din</List.Item>
                        <List.Item>husker valgene dine, så du slipper å starte på nytt hver gang</List.Item>
                    </List>
                    <Heading size="xsmall" level="3" spacing>
                        arbeidsplassen-consent *
                    </Heading>
                    <BodyLong spacing>
                        Brukes for å huske dine valg om informasjonskapsler i 90 dager. Versjonen hjelper oss med å
                        avgjøre om det har kommet endringer siden sist du valgte.
                    </BodyLong>
                    <Heading size="xsmall" level="3" spacing>
                        organizationNumber
                    </Heading>
                    <BodyLong spacing>
                        Brukes for å huske hvilken bedrift du representerer når du logger inn som arbeidsgiver. Slettes
                        automatisk når du logger ut.
                    </BodyLong>
                    <Heading size="xsmall" level="3" spacing>
                        <div>selvbetjening-idtoken</div> <div>sso-nav.no *</div> <div>XSRF-TOKEN-ARBEIDSPLASSEN</div>
                    </Heading>
                    <BodyLong spacing>
                        Brukes for å beskytte deg og tjenestene våre mot angrep. Disse hjelper oss å holde innloggingen
                        din trygg og slettes automatisk når du lukker nettleseren eller logger ut.
                    </BodyLong>
                    <Heading size="xsmall" level="3" spacing>
                        sessionId
                    </Heading>
                    <BodyLong spacing>
                        Brukes sammen med verktøyet Sentry for å oppdage, forstå og fikse tekniske feil raskt.
                        Nullstilles daglig.
                    </BodyLong>
                    <Heading size="xsmall" level="3" spacing>
                        userPreferences
                    </Heading>
                    <BodyLong spacing>
                        Brukes for å huske dine preferanser og gi deg en bedre opplevelse når du søker etter jobber.
                        Slettes automatisk hvis du ikke har besøkt oss på 90 dager.
                    </BodyLong>

                    <Heading size="large" level="2" spacing id="custom-cookie-heading">
                        Valgfrie informasjonskapsler
                    </Heading>
                    <BodyLong spacing>
                        De valgfrie informasjonskapslene hjelper oss med statistikk og analyse for å forbedre tjenestene
                        våre. Vi samler kun inn data som viser hvordan nettsidene brukes – uten å kunne identifisere
                        deg. Vi har strenge sikkerhetstiltak og deler ikke dataene med andre.
                    </BodyLong>
                    <BodyLong spacing>
                        Under finner du de valgfrie informasjonskapslene og hva de gjør. De merket med stjerne (*)
                        inkluderer flere som begynner med samme navn.
                    </BodyLong>

                    <Heading size="xsmall" level="3" spacing>
                        _hjSession *
                    </Heading>
                    <BodyLong spacing>
                        Brukes til frivillige brukerundersøkelser i verktøyet HotJar. Informasjonskapslene holder
                        oversikt over hvilke undersøkelser du har blitt invitert til, akseptert og fullført.
                    </BodyLong>

                    <Heading size="xsmall" level="3" spacing>
                        Umami
                    </Heading>
                    <BodyLong spacing>
                        Vi bruker verktøyet Umami for å forstå hvordan nettsiden vår brukes. For å skille deg fra andre
                        brukere lager vi en unik ID basert på informasjon fra nettleseren din – uten
                        informasjonskapsler. Vi beskytter personvernet ditt ved å fjerne deler av IP-adressen din før vi
                        lagrer dataene.
                    </BodyLong>

                    <Heading size="xsmall" level="3" spacing>
                        usertest- *
                    </Heading>
                    <BodyLong spacing>
                        Brukes til frivillige brukerundersøkelser i UX Signals. Informasjonskapslene husker hvilke
                        undersøkelser du eventuelt deltar i.
                    </BodyLong>

                    <BodyLong>
                        <strong>Merk!</strong> Hvis du har besøkt nav.no, kan du ha fler informasjonskapsler derfra
                        siden arbeidsplassen.no er en del av nav.no. Les mer om{" "}
                        <AkselLink as={NextLink} href="https://www.nav.no/informasjonskapsler">
                            informasjonskapsler på nav.no
                        </AkselLink>
                        .
                    </BodyLong>
                </div>
            </div>
        </article>
    );
}
