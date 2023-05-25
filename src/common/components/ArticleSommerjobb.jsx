import { Heading, Ingress } from "@navikt/ds-react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import ArrowIcon from "@/src/common/components/images/ArrowIcon";

function ArticleSommerjobb({ color = "primary" }) {
    return (
        <NextLink href="/sommerjobb-jobbsoker" passHref legacyBehavior>
            <div className={`article-panel arb-${color}-bg-text mb-4 article-panel-animation`}>
                <div className="">
                    <img
                        className="article-panel-img"
                        src="/images/sommerjobb-jobbsoker-small.png"
                        alt="Bilde av en dame med forkle som smiler"
                    />
                </div>

                <div className="size article-panel-text">
                    <Heading className="article-panel-heading" id="heading" level="2" size="large" spacing>
                        Ikke for sent å søke på sommerjobb!
                    </Heading>
                    <div />
                    <div className="article-panel-flex mb-2">
                        <Ingress>Bedrifter publiserer nye sommerjobber fortløpende. Ta sjansen og søk i dag!</Ingress>
                    </div>
                    <div className="article-panel-icon">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </NextLink>
    );
}

ArticleSommerjobb.propTypes = {
    color: PropTypes.string,
};

export default ArticleSommerjobb;
