import * as amplitude from "@amplitude/analytics-browser";

const USER_PROPERTIES = new amplitude.Identify();

function getAmplitudeKey() {
    if (typeof window === "undefined") return ""; // server side
    if (window.location.href.includes("dev.nav.no")) return "3acd3a52e065d2d99856a12e7e9e1432"; // dev
    if (window.location.href.includes("nav.no")) return "a7b3f00008ae250a08c3ebbc6bf718f9"; // prod
    return ""; // other e.g. localhost
}

export function setUpAmplitude() {
    try {
        const ampKey = getAmplitudeKey();
        if (!ampKey) return false;

        amplitude.init(ampKey, undefined, {
            serverUrl: `https://amplitude.nav.no/collect`,
            defaultTracking: {
                pageViews: true,
                sessions: true,
                formInteractions: true,
            },
            /** Need this for /collect-auto according to https://nav-it.slack.com/archives/CMK1SCBP1/p1669722646425599
             * but seems to work fine with /collect? Keeping it here just in case.
            IngestionMetadata: {
                sourceName: window.location.toString(),
            },
            */
        });
        return true;
    } catch (e) {
        return false;
    }
}

function setUserProperties(property, value) {
    USER_PROPERTIES.set(property, value);
    amplitude.identify(USER_PROPERTIES);
}

export function setAuthenticatedStatus(authenticated) {
    setUserProperties("is_authenticated", authenticated);
}
