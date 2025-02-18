import { createContext, useState, useMemo, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CookieBannerContext = createContext();

export function CookieBannerProvider({ children }) {
    const [showCookieBanner, setShowCookieBanner] = useState(true);
    const [autoFocus, setAutoFocus] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const bannerElement = document.getElementById("arb-cookie-banner-section");

        // Set focus if autofocus
        if (showCookieBanner && autoFocus && bannerElement) {
            bannerElement.setAttribute("tabindex", "0");
            bannerElement.focus();
            setAutoFocus(false);
            bannerElement.removeAttribute("tabindex");
        }
    }, [showCookieBanner, autoFocus]);

    // Manually open banner, and enable autofocus
    const openCookieBanner = (buttonElement) => {
        buttonRef.current = buttonElement;
        setAutoFocus(true);
        setShowCookieBanner(true);
    };

    // Close banner and set focus back to button that opened it
    const closeCookieBanner = () => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
        setShowCookieBanner(false);
    };

    const contextValue = useMemo(
        () => ({
            showCookieBanner,
            setShowCookieBanner,
            openCookieBanner,
            closeCookieBanner,
        }),
        [showCookieBanner],
    );

    return <CookieBannerContext.Provider value={contextValue}>{children}</CookieBannerContext.Provider>;
}

CookieBannerProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CookieBannerContext;
