"use client";

import { useEffect } from "react";
import { CookieBannerUtils } from "@navikt/arbeidsplassen-react";
import { usePathname, useSearchParams } from "next/navigation";

// Using API in pam-stillingsok, and this file can be deleted when moving this repo to pam-stillingsok
export default function FastApiTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const trackPageView = async () => {
            try {
                const userActionTaken = CookieBannerUtils.getUserActionTakenValue(document.cookie);
                const { analyticsConsent } = CookieBannerUtils.getConsentValues(document.cookie);
                let eventName = "no-action";
                if (userActionTaken) eventName = "not-accepted";
                if (userActionTaken && analyticsConsent) eventName = "accepted";

                await fetch("/stillinger/api/fastapi", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        url_host: window.location.host,
                        url_path: pathname,
                        url_query: searchParams.toString(),
                        event_name: eventName,
                    }),
                });
            } catch (err) {
                console.error("An error occurred sending event to API route:", err);
            }
        };

        trackPageView();
    }, [pathname, searchParams]);

    return null;
}
