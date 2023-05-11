import { Heading, Ingress, Link as DsLink, Panel } from "@navikt/ds-react";
import PropTypes from "prop-types";
import NextLink from "next/link";

function ArticleSommerjobb({ color = "primary" }) {
    return (
        <Panel className={`arb-panel article-panel arb-${color}-bg-text`}>
            <div className="arb-home-div-width">
                <img
                    className="article-panel-img"
                    src="/images/sommerjobb-jobbsoker-small.png"
                    alt="Bilde av en dame med forkle som smiler"
                />
            </div>
            <div className="size article-panel-text">
                <Heading spacing level="2" size="large">
                    <NextLink href="/sommerjobb-jobbsoker">
                        <DsLink className="arb-primary-bg-text">Ikke for sent å søke på sommerjobb!</DsLink>
                    </NextLink>
                </Heading>
                <Ingress>Bedrifter publiserer nye sommerjobber fortløpende. Ta sjansen og søk i dag!</Ingress>
            </div>
        </Panel>
    );
}

ArticleSommerjobb.propTypes = {
    color: PropTypes.string,
};

export default ArticleSommerjobb;
