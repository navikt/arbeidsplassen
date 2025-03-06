import { HGrid, LinkPanel } from "@navikt/ds-react";
import PropTypes from "prop-types";
import NextLink from "next/link";

function ImageBannerLinkPanel({ href, image, alt, title, description, color = "primary", imgWidth, imgHeight }) {
    return (
        <LinkPanel as={NextLink} className={`arb-link-panel-${color} mb-10`} href={href}>
            <HGrid gap={{ xs: "6", md: "12" }} columns={{ xs: 1, sm: 1, md: 2 }} align="center">
                <div className="banner-image-link-panel">
                    <img height={imgHeight} width={imgWidth} src={image} alt={alt} />
                </div>
                <div>
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--large">{title}</LinkPanel.Title>
                    <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                        {description}
                    </LinkPanel.Description>
                </div>
            </HGrid>
        </LinkPanel>
    );
}

ImageBannerLinkPanel.propTypes = {
    href: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
};

export default ImageBannerLinkPanel;
