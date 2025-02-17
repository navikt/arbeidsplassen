import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CookieBannerContext = createContext();

export function CookieBannerProvider({ children }) {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    const contextValue = useMemo(
        () => ({ showCookieBanner, setShowCookieBanner }),
        [showCookieBanner, setShowCookieBanner],
    );

    return <CookieBannerContext.Provider value={contextValue}>{children}</CookieBannerContext.Provider>;
}

CookieBannerProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CookieBannerContext;
