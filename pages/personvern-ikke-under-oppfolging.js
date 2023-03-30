import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/pages/components/layouts/LayoutArticles";

export default function personvernIkkeUnderOppfolging() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/personvern">Til personvernserklæring</Link>
                    </div>
                    <Heading size="xlarge" level="1" spacing>
                        Personvernerklæring for deg som ikke er under arbeidsrettet oppfølging fra NAV
                    </Heading>
                    <BodyLong>Publisert 1. februar 2022.</BodyLong>
                    <BodyLong className="mb-4">Oppdatert 29. juni 2022.</BodyLong>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Innhold
                        </Heading>
                        <ul>
                            <li>
                                <BodyLong>
                                    <Link href="#information">Hvilke personopplysninger samler vi inn?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="#goals">Hvilke formål brukes personopplysningene til?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="#time">Hvor lenge lagres opplysningene?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="#legal">
                                        Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                                    </Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="#who">Hvem deles opplysningene med?</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="#rights">Hvilke rettigheter har du?</Link>
                                </BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-subsection" id="information">
                        <Heading size="medium" level="2" spacing>
                            Hvilke personopplysninger samler vi inn?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Profil
                        </Heading>
                        <BodyLong>
                            Når du tar i bruk innloggede tjenester på arbeidsplassen.no, innhenter vi grunnleggende
                            personalia fra folkeregisteret:
                        </BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Navn</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Telefonnummer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>E-postadresse</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Bostedsadresse</BodyLong>
                            </li>
                        </ul>
                        <BodyLong spacing>
                            Disse opplysningene er nødvendige for at vi skal kunne opprette en profil for deg. Dersom du
                            ikke ønsker at vi behandler disse opplysningene, vil vi ikke kunne opprette en profil. Du
                            kan redigere opplysningene vi har om deg, men det vil ikke påvirke dine registrerte data i
                            folkeregisteret.
                        </BodyLong>
                        <BodyLong>
                            Dersom du velger å ta i bruk øvrige tjenester på innloggede sider, vil vi lagre de
                            nødvendige opplysningene for å bruke tjenesten i din profil. Dette kan for eksempel være:
                        </BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Favoritter – stillinger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Lagrede søk – stillinger</BodyLong>
                            </li>
                        </ul>
                        <BodyLong spacing>Du kan slette disse opplysningene når du selv ønsker.</BodyLong>
                        <BodyLong>
                            Mens du er innlogget vil innloggingsinformasjon du avgir oppbevares i en informasjonskapsel,
                            som gjør at du forblir innlogget hele tiden mens du er inne på våre sider.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            CV-opplysninger
                        </Heading>
                        <BodyLong spacing>Du kan registrere følgende CV-opplysninger i vår CV-tjeneste:</BodyLong>
                        <ul>
                            <li>
                                <BodyLong>Sammendrag</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Jobbønsker</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Utdanninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Fagbrev</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Språk</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Kompetanser</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Arbeidserfaringer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Andre erfaringer</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Offentlge godkjenninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Andre godkjenninger</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Førerkort</BodyLong>
                            </li>
                            <li>
                                <BodyLong>Kurs</BodyLong>
                            </li>
                        </ul>
                        <BodyLong>Du kan når som helst endre eller slette opplysningene i din CV.</BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Deltagelse på jobbtreff
                        </Heading>
                        <BodyLong>
                            Ingen data om din deltagelse på jobbtreff vil bli delt, hverken til andre deltagere,
                            bedriften eller til NAV. Vi lagrer ingen data om deg angående din deltagelse på jobbtreff.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="goals">
                        <Heading size="medium" level="2" spacing>
                            Hvilke formål brukes personopplysningene til?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Velfungerende arbeidsmarked
                        </Heading>
                        <BodyLong>
                            Arbeidsplassen.no skal bidra et velfungerende arbeidsmarked gjennom en åpen plattform for
                            arbeidsmarkedet. Vi lagrer og behandler personopplysninger for å gjøre det enklere for
                            jobbsøkere å finne jobb og for arbeidsgivere å skaffe arbeidskraft. Dette er i tråd med NAVs
                            samfunnsoppdrag om å få flere i arbeid.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Profilering og tilpasset innhold
                        </Heading>
                        <BodyLong>
                            Dersom du selv har samtykket til det, vil du kunne motta innhold som er tilpasset deg,
                            basert på personopplysningene vi samler inn på arbeidsplassen.no. Dette vil for eksempel
                            kunne være forslag om jobber som kan være relevant for deg.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Statistikk og kunnskap om arbeidsmarkedet
                        </Heading>
                        <BodyLong>
                            NAV benytter opplysningene fra arbeidsplassen.no til å utvikle statistikk og kunnskap om
                            arbeidsmarkedet. Les mer i{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-3">
                                NAVs generelle personvernerklæring.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-section" id="time">
                        <Heading size="medium" level="2" spacing>
                            Hvor lenge lagres opplysningene?
                        </Heading>
                        <BodyLong spacing>
                            Opplysningene vi trenger for at du skal kunne ha en profil på arbeidsplassen.no, lagres
                            inntil du sletter profilen din hos oss. Opplysningene du gir fra deg ved bruk av de ulike
                            tjenestene, lagres så lenge du har valgt å ta i bruk tjenesten på arbeidsplassen.no. Dersom
                            du sletter opplysningene fra din profil, slettes også dataene hos oss. NAV behandler også
                            opplysninger for statistikkformål. Statistikken kan i noen tilfeller inneholde
                            personopplysninger.
                        </BodyLong>
                        <BodyLong>
                            Din profil og alle opplysninger tilknyttet deg slettes automatisk etter 1 år. Du får et
                            varsel om dette før opplysningene slettes, slik at du har mulighet til å fornye samtykke, og
                            beholde opplysningene et år til.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="legal">
                        <Heading size="medium" level="2" spacing>
                            Hva er det rettslige grunnlaget for behandlingen av personopplysninger?
                        </Heading>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Samtykke
                        </Heading>
                        <BodyLong>
                            Når du tar i bruk og legger informasjon inn på innloggede tjenester på arbeidsplassen.no,
                            samtykker du til at vi kan behandle personopplysninger om deg. Du kan selv velge hvilke
                            tjenester du vil samtykke til at vi behandler personopplysninger for, herunder deling av CV
                            med arbeidsgivere og med den Europeiske Jobbmobilitetsportalen. Du kan når som helst trekke
                            ditt samtykke.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="who">
                        <Heading size="medium" level="2" spacing>
                            Hvem deles opplysningene med?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            CV-deling med den Europeiske Jobbmobilitetsportalen
                        </Heading>
                        <BodyLong spacing>
                            Dersom du ønsker kan du dele CV-en din med arbeidsgivere nasjonalt eller i EU/EØS og Sveits,
                            gjennom den den Europeiske Jobbmobilitetsportalen (EURES-portalen). EURES er også
                            behandlingsansvarlig ved slik deling. Mer informasjon om denne behandlingen finner du i
                            tjenesten før du eventuelt samtykker til å dele din CV.
                        </BodyLong>
                        <BodyLong>
                            Du velger selv ut hva fra CV-en din som du ønsker å dele med den Europeiske
                            jobbmobilitetsportalen. Du kan når som helst endre eller slette hva du deler.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Våre databehandlere
                        </Heading>
                        <BodyLong spacing>
                            For å kunne tilby våre tjenester på arbeidsplassen.no benytter vi databehandlere, som
                            innebærer at vi deler dine personopplysninger med disse. Dette gjelder for eksempel
                            IT-leverandører som har avtaler med NAV. For å lese mer om dette, se{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-4">
                                NAVs generelle personvernerklæring.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection" id="rights">
                        <Heading size="medium" level="2" spacing>
                            Hvilke rettigheter har du?
                        </Heading>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til innsyn og retting
                        </Heading>
                        <BodyLong>
                            Du har rett til å få vite hvilke personopplysninger vi har om deg og be om retting av
                            uriktige opplysninger. Du kan logge deg inn på Min side på arbeidsplassen.no for å se mange
                            av opplysningene vi har registrert om deg. For innsyn i personopplysninger ut over dette, må
                            du{" "}
                            <Link href="https://www.nav.no/personvernerklaering#chapter-7">
                                ta kontakt med oss på nav.no.
                            </Link>
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til å trekke tilbake samtykke og sletting
                        </Heading>
                        <BodyLong spacing>
                            Når du har samtykket til en behandling, kan du til enhver tid trekke tilbake dine samtykker.
                            Dette gjør du ved gå til «innstillinger». Der kan du administrere dine samtykker, og slette
                            dem om du ønsker.
                        </BodyLong>
                        <BodyLong spacing>
                            Du kan også velge «slett min profil». Da vil alle opplysninger du har på arbeidsplassen.no
                            slettes.
                        </BodyLong>
                        <BodyLong spacing>
                            Du kan også slette eller endre opplysninger enkeltvis inne i de ulike tjenestene som CV og
                            stillingssøk.
                        </BodyLong>
                        <BodyLong>
                            Hver 6. måned vil vi sende deg en e-post for å minne deg på at du har opplysninger lagret på
                            arbeidsplassen.no, hva som er status på dine opplysninger, og informasjon om hvordan du kan
                            endre eller slette dine opplysninger.
                        </BodyLong>
                    </section>

                    <section className="arb-article-subsection">
                        <Heading size="small" level="3" spacing>
                            Rett til dataportabilitet
                        </Heading>
                        <BodyLong>
                            Du har rett til å be oss om å overføre opplysninger om deg til deg eller en annen
                            behandlingsansvarlig. Dette innebærer en rett til å få utlevert i et maskinlesbart og vanlig
                            brukt filformat dersom du ønsker dette. Formålet med dette er at du skal kunne gjenbruke
                            disse opplysningene hos en annen behandlingsansvarlig, dersom du ønsker.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="small" level="3" spacing>
                            Rett til begrensning av behandlingen
                        </Heading>
                        <BodyLong>
                            Du har rett til å be om at NAV midlertidig stopper behandlingen av dine opplysninger, dersom
                            du mener at opplysningene vi har om deg er feil eller du mener at vår behandling av
                            opplysningene er ulovlig. Det samme gjelder dersom du mener at vi ikke trenger
                            opplysningene.
                        </BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
