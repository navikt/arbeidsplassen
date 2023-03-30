import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function vilkarApi() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-24">
                        <Link href="/vilkar-og-retningslinjer">
                            <ChevronLeftIcon aria-hidden="true" />
                            Til Vilkår og retningslinjer
                        </Link>
                    </div>

                    <Heading spacing size="xlarge" level="1">
                        Vilkår for bruk av API for stillingsannonser - Job Ads Public Feed
                    </Heading>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Beskrivelse av tjenesten
                        </Heading>
                        <BodyLong>
                            Gjennom arbeidsplassen.no tilbyr NAV data fra stillingssøket på arbeidsplassen.no.
                            Stillingssøket inneholder en oversikt og informasjon om de fleste aktive utlyste stillinger.
                            Stillingssøket inneholder både stillinger som er registrert direkte hos NAV, publisert til
                            NAV via et åpent API og hentet inn fra våre samarbeidspartnere.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Hvem kan bruke tjenestene
                        </Heading>
                        <BodyLong spacing>
                            Alle kan bruke tjenesten. Tjenesten er kostnadsfri og leveres av NAV. NAV forbeholder seg
                            retten til å stoppe tilgang ved feil bruk av tjenesten.
                        </BodyLong>
                        <BodyLong>Feil bruk av tjenesten (ikke uttømmende liste) kan være:</BodyLong>
                        <ul>
                            <li>
                                <BodyLong>
                                    Ikke sletter stillinger når de løper ut fra dato eller på andre måter blir trukket
                                    fra APIet.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>Uetisk eller ulovlig bruk av stillingsdataene.</BodyLong>
                            </li>
                        </ul>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Typer tilgang
                        </Heading>
                        <ol>
                            <li>
                                <BodyLong>
                                    <b>Tilgang som uregistrert bruker:</b> (Offentlig nøkkel) Denne tilgangen kan du
                                    bruke for å prøve ut tjenesten. Ulempen er at vi ikke har mulighet til å informere
                                    deg om endringer når den offentlige tilgangsnøkkelen endres uten forvarsel. Hvis du
                                    ønsker å bruke tjenesten på fast basis, anbefaler vi alternativ 2.
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <b>Tilgang som registrert bruker:</b> (Privat nøkkel) Vi anbefaler denne tilgangen
                                    hvis du skal bruke tjenesten på fast basis. Fordelen er at vi kan informere deg når
                                    det skjer endringer i tjenesten. Denne tilgangen krever at du oppgir e-postadressen
                                    din, navnet ditt og bedriftens navn til{" "}
                                    <Link href="mailto:nav.team.arbeidsplassen@nav.no">
                                        nav.team.arbeidsplassen@nav.no
                                    </Link>
                                    . Du vil få tilbakemelding i løpet av to virkedager.
                                </BodyLong>
                            </li>
                        </ol>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Slik får du tilgang
                        </Heading>
                        <BodyLong spacing>
                            Mer informasjon om APIet og tilkobling finner du i{" "}
                            <Link href="https://data.norge.no/dataservices/ed933ffe-a32c-38a2-9921-1fed86ad3173">
                                Datatjenestebeskrivelse i Felles datakatalog.
                            </Link>
                        </BodyLong>
                        <BodyLong>
                            Har du spørsmål kan du kontakte oss på e-post{" "}
                            <Link href="mailto:nav.team.arbeidsplassen@nav.no">nav.team.arbeidsplassen@nav.no</Link>.{" "}
                            Ønsker du å avslutte abonnementet, send en henvendelse til samme e-postadresse.
                        </BodyLong>
                    </section>

                    <section className="arb-article-section">
                        <Heading size="medium" level="2" spacing>
                            Personvern
                        </Heading>
                        <BodyLong spacing>
                            NAV er gjennom offentlighetsloven og digitaliseringsrundskrivet pålagt å gjøre offentlige
                            data tilgjengelig. I retningslinjene går det fram at man bør oppgi kontaktinformasjon.
                        </BodyLong>
                        <BodyLong>
                            For å kunne tilby tilgang som registrert bruker (alternativ 2) må vi lagre nødvendige
                            personopplysninger så lenge du/dere benytter tjenesten. Disse opplysningene trenger vi for å
                            kunne komme i kontakt med deg senere, for eksempel ved endringer eller driftsavbrudd.
                            Kontaktinformasjonen din blir slettet når du ikke lenger har tilgang som registrert bruker.
                            For mer informasjon om personvern,{" "}
                            <Link href="https://www.nav.no/personvernerklaering">se NAVs personvernerklæring.</Link>
                        </BodyLong>
                    </section>
                </div>
            </div>
        </LayoutArticles>
    );
}
