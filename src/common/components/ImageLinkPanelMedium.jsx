import { LinkPanel } from "@navikt/ds-react";
import PropTypes from "prop-types";

function ImageLinkPanelMedium({ href, image, alt, title, description, ...args }) {
    return (
        <div className="image-link-panel-medium">
            <div className="image-link-panel-img-medium">
                <img src={image} alt={alt} />
            </div>
            <LinkPanel href={href} {...args}>
                <LinkPanel.Title className="navds-link-panel__title navds-heading--small pl-1_5">
                    {title}
                </LinkPanel.Title>
                <LinkPanel.Description className="navds-link-panel__description navds-body-long pl-1_5">
                    {description}
                </LinkPanel.Description>
            </LinkPanel>
        </div>
    );
}

ImageLinkPanelMedium.propTypes = {
    href: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default ImageLinkPanelMedium;
