import { LinkPanel } from "@navikt/ds-react";
import PropTypes from "prop-types";

function ImageLinkPanelMedium({ href, image, alt, title, description, color = "primary-solid", ...args }) {
    return (
        <div className="image-link-panel-medium">
            <div className="image-link-panel-img-medium">
                <img src={image} alt={alt} />
            </div>
            <LinkPanel className={`arb-${color}-bg-text arb-link-panel image-link-panel-link`} href={href} {...args}>
                <LinkPanel.Title className="navds-link-panel__title navds-heading--small image-link-panel-content">
                    {title}
                </LinkPanel.Title>
                <LinkPanel.Description className="navds-link-panel__description navds-body-long pl-1_5 image-link-panel-content">
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
    color: PropTypes.string,
};

export default ImageLinkPanelMedium;
