import { createContext, useState, useMemo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CookieBannerUtils } from "@navikt/arbeidsplassen-react";

const CookieBannerContext = createContext();

export function CookieBannerProvider({ children }) {
    const [showCookieBanner, setShowCookieBanner] = useState(null);
    const [autoFocus, setAutoFocus] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const hasUserTakenCookieAction = CookieBannerUtils.getUserActionTakenValue();

        setShowCookieBanner(!hasUserTakenCookieAction);
    }, []);

    const bannerVisible = showCookieBanner === null ? false : showCookieBanner;

    useEffect(() => {
        const firstButton = document.getElementById("arb-cookie-banner-section")?.querySelector("button");

        // Set focus to first button inside banner if autofocus
        if (bannerVisible && autoFocus && firstButton) {
            firstButton.focus();
            setAutoFocus(false);
        }
    }, [bannerVisible, autoFocus]);

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
            showCookieBanner: bannerVisible,
            setShowCookieBanner,
            openCookieBanner,
            closeCookieBanner,
        }),
        [bannerVisible],
    );

    return <CookieBannerContext.Provider value={contextValue}>{children}</CookieBannerContext.Provider>;
}

CookieBannerProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CookieBannerContext;
