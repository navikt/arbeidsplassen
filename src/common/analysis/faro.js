import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

export default function setupFaro() {
    console.log("appVersion: ", window.publicEnv ? window.publicEnv.APP_VERSION : "");
    console.log("telemetryUrl: ", window.publicEnv ? window.publicEnv.TELEMETRY_URL : "");
    initializeFaro({
        url: window.publicEnv ? window.publicEnv.TELEMETRY_URL : "", // required, see below
        app: {
            name: "arbeidsplassen", // required
            version: window.publicEnv ? window.publicEnv.APP_VERSION : "", // optional; useful in Grafana to get diff between versions
            instrumentations: [
                ...getWebInstrumentations({
                    captureConsole: true,
                }),
                new TracingInstrumentation(),
            ],
        },
    });
    console.info("Faro Initialized");
}
