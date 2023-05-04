import { LinkPanel } from "@navikt/ds-react";
import PropTypes from "prop-types";

function ImageLinkPanelLarge({ href, image, alt, title, color = "primary-solid", description, ...args }) {
    return (
        <div className="image-link-panel-large">
            <div className="image-link-panel-img-large">
                <img src={image} alt={alt} />
            </div>
            <LinkPanel className={`arb-${color}-bg-text arb-link-panel image-link-panel-link`} href={href} {...args}>
                <LinkPanel.Title className="navds-link-panel__title navds-heading--small image-link-panel-content">
                    {title}
                </LinkPanel.Title>
                <LinkPanel.Description className="navds-link-panel__description navds-body-long image-link-panel-content">
                    {description}
                </LinkPanel.Description>
            </LinkPanel>
        </div>
    );
}

ImageLinkPanelLarge.propTypes = {
    href: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default ImageLinkPanelLarge;
