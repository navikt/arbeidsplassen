import { BodyLong, GuidePanel, Heading, Link } from "@navikt/ds-react";
import LayoutArticles from "@/src/common/components/layouts/LayoutArticles";
import HandHeart from "@/src/common/components/icons/HandHeart";

export default function workInNorway() {
    return (
        <LayoutArticles>
            <div className="page-margin-top-and-bottom">
                <article className="arb-article">
                    <section className="mb-80">
                        <Heading className="text-center" size="xlarge" level="1" spacing>
                            Information about working in Norway for Ukrainian refugees
                        </Heading>

                        <ul className="refugees-grid">
                            <li>
                                <BodyLong className="refugees-text-end">
                                    <Link href="/en/work-in-norway">Information about working in Norway</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>
                                    <Link href="/ua/work-in-norway">Інформація українською мовою</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong className="refugees-text-end">
                                    <Link href="/ru/work-in-norway">Информация на русском языке</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>Informasjon for arbeidsgivere</BodyLong>
                            </li>
                        </ul>
                    </section>

                    <GuidePanel poster illustration={<HandHeart />} className="mb-4">
                        <div className="arb-guide-panel-lofty">
                            <Heading className="text-center mb-2" size="medium" level="3" spacing>
                                Ønsker du å rekruttere flyktninger?
                            </Heading>
                            <BodyLong spacing>
                                Alle flyktninger med skriftlig vedtak om opphold- og arbeidstillatelse fra UDI kan
                                starte i arbeid.
                            </BodyLong>
                            <BodyLong spacing>
                                Vi anbefaler å{" "}
                                <Link href="https://arbeidsplassen.nav.no/stillingsregistrering/stillingsannonser">
                                    lyse ut stillinger
                                </Link>{" "}
                                på arbeidsplassen.no eller{" "}
                                <Link href="https://arbeidsplassen.nav.no/jobbtreff/bedrift">
                                    invitere til jobbtreff
                                </Link>{" "}
                                og presentere dine rekrutteringsbehov i en direkte sending for jobbsøkere. Begge
                                tjenestene er gratis.
                            </BodyLong>
                            <BodyLong spacing>
                                Husk å informere om språkkrav for stillingen og skrive annonsen eller jobbtreffet på
                                engelsk hvis det er arbeidsspråket.
                            </BodyLong>
                            <BodyLong spacing>
                                <Link href="https://www.nav.no/arbeidsgiver/rekruttere-flyktninger">
                                    NAVs råd for deg som ønsker å komme i kontakt med kvalifiserte kandidater
                                </Link>
                            </BodyLong>
                            <BodyLong>
                                <Link href="https://www.imdi.no/mangfold-i-arbeidslivet/">
                                    Les om hvordan mangfold i arbeidslivet kan bidra til innovasjon, vekst og
                                    verdiskaping på imdi.no
                                </Link>
                            </BodyLong>
                        </div>
                    </GuidePanel>
                </article>
            </div>
        </LayoutArticles>
    );
}
