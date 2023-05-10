import * as amplitude from "@amplitude/analytics-browser";

function setUpAmplitude(apiKey) {
    try {
        amplitude.init(apiKey, undefined, {
            serverUrl: `https://amplitude.nav.no/collect`,
            transport: amplitude.Types.TransportType.SendBeacon,
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

export default setUpAmplitude;
