import { LinkPanel } from "@navikt/ds-react";

const ImageLinkPanel = ({ href, image, alt, title, description, ...args }) => {
    return (
        <div className="article-panel">
            <div className="article-panel-image">
                <img src={image} alt={alt} />
            </div>
            <LinkPanel href={href} {...args}>
                <LinkPanel.Title className="navds-link-panel__title navds-heading--small">{title}</LinkPanel.Title>
                <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                    {description}
                </LinkPanel.Description>
            </LinkPanel>
        </div>
    );
};

export default ImageLinkPanel;
