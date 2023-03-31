import { BodyLong, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function arbeidsgivertjenester() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <Link href="/bedrift" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til bedrift
                    </Link>
                    <Heading spacing size="xlarge" level="1">
                        Hvem kan bruke arbeidsgivertjenestene?
                    </Heading>

                    <Heading size="large" level="2" spacing>
                        Tilgang via Altinn
                    </Heading>
                    <BodyLong spacing>
                        Bare du som er arbeidsgiver kan bruke arbeidsgivertjenester fra NAV på arbeidsplassen.no.
                        Privatpersoner kan ikke bruke tjenestene, heller ikke privatpersoner som er oppdragsgiver uten å
                        være arbeidsgiver.*
                    </BodyLong>
                    <BodyLong spacing>
                        Bedriften må være registrert i Arbeidsgiver- og arbeidstakerregisteret for underenhet.
                        Underenhet vil si en operativ enhet som kan ansette og lønne personer.
                    </BodyLong>
                    <BodyLong spacing>
                        Du logger inn med ID-porten. Systemet vil sjekke dine rettigheter i Altinn. For at du eller en
                        kollega skal kunne benytte NAVs nye rekrutteringstjeneste på vegne av virksomheten, må dere ha
                        rettigheten «Rekruttering» for underenhet.{" "}
                        <strong>
                            Du kan sjekke om du har riktig rettighet ved å prøve å logge deg inn i tjenesten som
                            arbeidsgiver.
                        </strong>
                    </BodyLong>
                    <BodyLong spacing>
                        Arbeidsgiveren kan delegere tilgang til deg via Altinn, hvis du ikke har den allerede. Har du en
                        av Altinn-rollene «Lønn og personalmedarbeider» eller «Utfyller/innsender» for underenhet, vil
                        du automatisk ha rettigheten «Rekruttering» på vegne av bedriften.
                    </BodyLong>

                    <Heading size="medium" level="3" spacing>
                        Mer hjelp
                    </Heading>
                    <ul className="mb-3">
                        <li>
                            <BodyLong>
                                <Link href="https://www.nav.no/_/attachment/inline/961aafd3-c5d8-4d23-aedc-e2960daf055b:66beb823fa6f6d064a4a6875378c11339312fa2d/sjekk-om-en-ansatt-har-rettigheten-rekruttering.pdf">
                                    Sjekk om en ansatt har rettigheten rekruttering (pdf)
                                </Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="https://www.nav.no/_/attachment/inline/b92de122-a67b-4938-9e76-cacb4e0cf665:f739850dac1cbe9e4219b8a84e89851bf5c9aa42/hvordan-tildele-rettigheten-rekruttering.pdf">
                                    Hvordan tildele rettigheten rekruttering (pdf)
                                </Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="https://www.nav.no/_/attachment/inline/112f4ee5-a273-43f3-b817-0f7484f80ebc:17b5499912cb737a36be39e95ba5735ea61cbd9e/hvordan-administrere-rettigheten-rekruttering.pdf">
                                    Hvordan administrere rettigheten rekruttering (pdf)
                                </Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="https://www.nav.no/_/attachment/inline/c2657320-51a1-4583-8e4f-b3a83f89f304:e53a19636d8f985ac1b1681a4f472f55b53bfcae/hvordan-tildele-rollen-tilgangsstyring.pdf">
                                    Hvordan tildele rollen tilgangsstyring (pdf)
                                </Link>
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                <Link href="https://www.nav.no/_/attachment/inline/1bff9f5e-f1bd-46f8-a79d-8fda87695633:dac00c6866d9673d7391fdfbafbb618ce46580db/Tilgangsstyring%20store%20virksomheter.pdf">
                                    Tilgangsstyring i store virksomheter (pdf)
                                </Link>
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing>
                        Utenlandske virksomheter
                    </Heading>
                    <BodyLong spacing>
                        Det er kun <strong>norske virksomheter som kan bruke innloggede tjenester</strong> på
                        arbeidsplassen.no.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Hvis du er en utenlandsk virksomhet som ønsker hjelp til å rekruttere medarbeidere fra Norge,
                        publisere en stilling i Den Europeiske Jobbmobilitetsportalen eller i et enkelt EU/EØS-land
                        eller Sveits, skal du ta kontakt med den offentlige arbeidsformidlingen (EURES) i hjemlandet
                        ditt. Les mer om{" "}
                        <Link href="https://eures.ec.europa.eu/employers/advertise-job_en">EURES-tjenesten</Link> i de
                        ulike landene.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Rekruttere fra EU/EØS og Sveits
                    </Heading>
                    <BodyLong spacing>
                        Hvis du ønsker å rekruttere fra EU/EØS og Sveits, kan du søke etter kandidater i Den Europeiske
                        Jobbmobilitetsportalen.
                    </BodyLong>
                    <BodyLong>
                        Har du spørsmål om publisering av stilling i{" "}
                        <Link href="https://eures.ec.europa.eu/index_en">Den Europeiske Jobbmobilitetsportalen</Link>{" "}
                        eller i et enkelt EU/EØS-land, ta kontakt med NAV Kontaktsenter EURES på{" "}
                        <Link href="mailto:eures@nav.no">eures@nav.no</Link> eller tlf. 55 55 33 39, tastevalg 2 (kl.
                        10-14). Les mer om{" "}
                        <Link href="https://www.nav.no/arbeidsgiver/rekruttere-eu-eos">
                            NAVs EURES-tjenester for arbeidsgivere.
                        </Link>
                    </BodyLong>
                    <hr />
                    <BodyLong size="small">
                        * Unntaket er at du som privatperson kan annonsere en stilling som brukerstyrt personlig
                        assistent. Hvis du foretrekker det, kan du publisere den selv i stedet for at din arbeidsgiver
                        gjør det. Send annonseteksten til stilling@nav.no. I annonsen må du oppgi om det er en fast
                        stilling eller et vikariat, antall arbeidstimer i uken, arbeidstid, arbeidsted, antall
                        stillinger og søknadsfrist. Du må også oppgi navn og e-postadresse til en kontaktperson.
                    </BodyLong>
                </div>
            </div>
        </LayoutArticles>
    );
}
