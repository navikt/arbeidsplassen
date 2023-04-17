import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";

export default function workInNorway() {
    return (
        <Layout>
            <Head>
                <title>Information about working in Norway for Ukrainian refugees - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <article className="article">
                    <section className="mb-3">
                        <Heading size="xlarge" level="1" spacing lang="en">
                            Information about working in Norway for Ukrainian refugees
                        </Heading>

                        <ul>
                            <li>
                                <BodyLong lang="en">
                                    <NextLink href="/work-in-norway-en" passHref legacyBehavior>
                                        <Link>Information about working in Norway</Link>
                                    </NextLink>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong lang="ua">
                                    <NextLink href="/work-in-norway-ua" passHref legacyBehavior>
                                        <Link>Інформація українською мовою</Link>
                                    </NextLink>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong lang="ru">
                                    <NextLink href="/work-in-norway-ru" passHref legacyBehavior>
                                        <Link>Информация на русском языке</Link>
                                    </NextLink>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>Informasjon for arbeidsgivere</BodyLong>
                            </li>
                        </ul>
                    </section>

                    <Heading size="large" level="2" spacing>
                        Ønsker du å rekruttere flyktninger?
                    </Heading>
                    <BodyLong spacing>
                        Alle flyktninger med skriftlig vedtak om opphold- og arbeidstillatelse fra UDI kan starte i
                        arbeid.
                    </BodyLong>
                    <BodyLong spacing>
                        Vi anbefaler å <Link href="/stillingsregistrering/stillingsannonser">lyse ut stillinger</Link>{" "}
                        på arbeidsplassen.no eller <Link href="/jobbtreff/bedrift">invitere til jobbtreff</Link> og
                        presentere dine rekrutteringsbehov i en direkte sending for jobbsøkere. Begge tjenestene er
                        gratis.
                    </BodyLong>
                    <BodyLong spacing>
                        Husk å informere om språkkrav for stillingen og skrive annonsen eller jobbtreffet på engelsk
                        hvis det er arbeidsspråket.
                    </BodyLong>
                    <BodyLong spacing>
                        <Link href="https://www.nav.no/arbeidsgiver/rekruttere-flyktninger">
                            NAVs råd for deg som ønsker å komme i kontakt med kvalifiserte kandidater
                        </Link>
                    </BodyLong>
                    <BodyLong>
                        <Link href="https://www.imdi.no/mangfold-i-arbeidslivet/">
                            Les om hvordan mangfold i arbeidslivet kan bidra til innovasjon, vekst og verdiskaping på
                            imdi.no
                        </Link>
                    </BodyLong>
                </article>
            </div>
        </Layout>
    );
}
