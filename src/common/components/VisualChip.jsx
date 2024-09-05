import React from "react";
import XIcon from "@/src/common/components/XIcon";
import PropTypes from "prop-types";

function VisualChip({ text }) {
    return (
        <span className="navds-chips__chip navds-chips__removable navds-chips--icon-right non-interactive-chip">
            <span className="navds-chips__chip-text">{text}</span>
            <span className="navds-chips__removable-icon">
                <XIcon />
            </span>
        </span>
    );
}

VisualChip.propTypes = {
    text: PropTypes.string.isRequired,
};

export default VisualChip;
