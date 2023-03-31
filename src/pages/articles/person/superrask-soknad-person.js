import { BodyLong, Heading, Link } from "@navikt/ds-react";
import IllustrationArticle from "../../../common/components/images/IllustrationArticle";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import { ChevronLeftIcon } from "@navikt/aksel-icons";

export default function superraskSoknadPerson() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <div className="arb-article">
                    <div className="mb-2">
                        <Link href="/">
                            <ChevronLeftIcon aria-hidden="true" /> Til forsiden
                        </Link>
                    </div>

                    <Heading size="xlarge" level="1" spacing>
                        Superrask søknad – en enklere måte å komme i kontakt med bedrifter
                    </Heading>

                    <div className="arb-article-figure">
                        <IllustrationArticle className="arb-article-figure-pull-outside" />
                    </div>

                    <BodyLong spacing>
                        Vi har gjort det lettere for deg å søke på jobber og komme i kontakt med interessante bedrifter.
                        Med noen få tastetrykk på mobil, nettbrett eller laptop kan du raskt vise frem din erfaring og
                        at du er rett person til jobben. Det er enkelt å se hvilke stillinger som har superrask søknad
                        da disse er merket med «superrask søknad» i stillingssøket på arbeidsplassen.no.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Når du velger å søke med en superrask søknad, er det lagt opp til at du får beskjed fra
                        bedriften om du er aktuell eller ikke. Du får denne beskjeden på e-post, så det er viktig at du
                        er nøye når du legger inn kontaktinformasjonen din.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Ingen CV eller langt søknadsbrev
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong className="mb-3">
                                Du svarer kun ut på de kvalifikasjoner bedriften legger vekt på i stillingen. Du har
                                mulighet til å skrive en kort begrunnelse om hvorfor akkurat du passer til jobben.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing>
                        Du får beskjed
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong className="mb-3">
                                Vi har gjort det enkelt for bedriften å vurdere din søknad, slik at du raskt skal få
                                tilbakemelding. Uansett om bedriften vurderer deg som aktuell eller ikke, skal du få en
                                beskjed på e-post sånn at du ikke går og lurer.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="large" level="2" spacing>
                        Du har kontroll på dine data
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>
                                Du kan når som helst trekke tilbake din søknad og informasjonen du har oppgitt.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong spacing>
                                Vi sletter all innsendt informasjon 3 måneder etter utgått frist på stillingsannonsen.
                            </BodyLong>
                        </li>
                    </ul>

                    <BodyLong spacing>
                        Les også{" "}
                        <Link href="/personvern-superrask-soknad">personvernerklæringen for superrask søknad</Link>.
                    </BodyLong>
                    <BodyLong spacing>
                        Superrask søknad er en helt ny løsning på arbeidsplassen.no. Prøv det og gi oss gjerne en
                        tilbakemelding på hvordan du synes det fungerte.
                    </BodyLong>
                    <BodyLong>Lykke til med jobbsøkingen!</BodyLong>
                </div>
            </div>
        </LayoutArticles>
    );
}
