"use client";

import { useContext, useEffect, useState } from "react";
import Script from "next/script";
import CookieBannerContext from "@/src/common/contexts/CookieBannerContext";
import { CookieBannerUtils } from "@navikt/arbeidsplassen-react";

export default function Umami() {
    const [isDev, setIsDev] = useState(false);
    const [isProd, setIsProd] = useState(false);
    const [websiteId, setWebsiteId] = useState("1cc70e4f-bb41-4d28-8115-cbbc32bee4d3");
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(false);
    const { showCookieBanner } = useContext(CookieBannerContext);

    useEffect(() => {
        if (window?.location?.hostname === "arbeidsplassen.intern.dev.nav.no") {
            setIsDev(true);
        }

        if (window?.location?.hostname === "arbeidsplassen.nav.no") {
            setIsProd(true);
            setWebsiteId("c2f0a46d-a5b4-4370-8b80-b9b9fcd39f96");
        }
        const consentValues = CookieBannerUtils.getConsentValues();
        setIsAnalyticsEnabled(consentValues.analyticsConsent);
    }, []);

    useEffect(() => {
        // Check consent values when cookiebanner is hidden
        if (!showCookieBanner) {
            const consentValues = CookieBannerUtils.getConsentValues();
            setIsAnalyticsEnabled(consentValues.analyticsConsent);
        }
    }, [showCookieBanner]);

    if (!isDev && !isProd) {
        return null;
    }

    if (!isAnalyticsEnabled) {
        return null;
    }

    return (
        <Script
            defer
            src="https://cdn.nav.no/team-researchops/sporing/sporing.js"
            data-host-url="https://umami.nav.no"
            data-website-id={websiteId}
            data-domains="arbeidsplassen.intern.dev.nav.no"
        />
    );
}
