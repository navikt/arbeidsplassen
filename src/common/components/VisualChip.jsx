import React from "react";
import XIcon from "@/src/common/components/XIcon";
import PropTypes from "prop-types";

function VisualChip({ text }) {
    return (
        <span className="non-interactive-chip">
            <span>{text}</span>
            <span>
                <XIcon />
            </span>
        </span>
    );
}

VisualChip.propTypes = {
    text: PropTypes.string.isRequired,
};

export default VisualChip;
