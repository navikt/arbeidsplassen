import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";

export default function kontaktOss() {
    return (
        <Layout>
            <Head>
                <title>Kontakt oss - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <Heading spacing size="xlarge" level="1">
                    Kontakt oss
                </Heading>

                <Heading size="medium" level="2" spacing>
                    Jobbsøker
                </Heading>
                <ul className="mb-4">
                    <li>
                        <BodyLong>
                            Se vår{" "}
                            <Link href="https://www.nav.no/teknisk">teknisk brukerstøtteside for privatpersoner</Link>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Får du oppfølging fra NAV? Du kan{" "}
                            <Link href="https://www.nav.no/person/kontakt-oss/">kontakte NAV på telefon.</Link>
                        </BodyLong>
                    </li>
                </ul>

                <Heading size="medium" level="2" spacing>
                    Arbeidsgiver
                </Heading>
                <ul>
                    <li>
                        <BodyLong>
                            Se vår{" "}
                            <Link href="https://www.nav.no/teknisk-bedrift">
                                teknisk brukerstøtteside for bedrifter
                            </Link>
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Arbeidsgivertelefonen i NAV tlf. 55 55 33 36. Hverdager 0900–1500. Svarer på spørsmål om
                            rekruttering, sykefraværsoppfølging, refusjoner, permittering og omstilling m.m.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            <Link href="https://arbeidsgiver.nav.no/kontakt-oss/">Kontakt NAV om rekruttering</Link>
                        </BodyLong>
                    </li>
                </ul>
            </article>
        </Layout>
    );
}
