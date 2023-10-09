import { BodyLong, Heading, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import NextLink from "next/link";

export default function personvernSuperraskSoknad() {
    return (
        <Layout variant="company">
            <Head>
                <title>Vilkår for bruk av superrask søknad - arbeidsplassen.no</title>
            </Head>
            <article className="container-small page-margin-top-and-bottom">
                <NextLink href="/vilkar-og-retningslinjer" passHref legacyBehavior>
                    <DsLink className="mb-8">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til Vilkår og retningslinjer
                    </DsLink>
                </NextLink>

                <Heading size="xlarge" level="1" spacing>
                    Vilkår for bruk av superrask søknad
                </Heading>
                <BodyLong className="mb-12">
                    Personopplysninger som du mottar fra jobbsøkere i “superrask søknad” kan kun brukes så lenge
                    formålet er å bemanne og rekruttere til en konkret stilling.
                </BodyLong>
                <BodyLong>
                    Det er ikke tillatt å bruke mottatte personopplysninger til andre formål, <br />
                    slik som å
                </BodyLong>
                <ul className="mb-12">
                    <li>
                        <BodyLong>
                            bruke opplysninger i forbindelse med salg eller markedsføring av varer eller tjenester
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>tilby arbeidssøkere stillinger der arbeidssøkeren må betale for å søke </BodyLong>
                    </li>
                    <li>
                        <BodyLong>tilby personer arbeidstreningsplasser</BodyLong>
                    </li>
                </ul>

                <BodyLong className="mb-24">NAV vil følge opp brudd på disse vilkårene hvis det forekommer.</BodyLong>
            </article>
        </Layout>
    );
}
