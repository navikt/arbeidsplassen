"use client";

import React from "react";

function Axe() {
    if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
        // this is a dev import
        // eslint-disable-next-line
        Promise.all([import("@axe-core/react"), import("react-dom")]).then(([axe, ReactDOM]) =>
            axe.default(React, ReactDOM, 1000),
        );
    }
    return null;
}

export default Axe;
