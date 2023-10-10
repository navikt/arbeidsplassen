import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import getSessionId from "@/src/common/utils";

export default function setupFaro() {
    if (process.env.NODE_ENV === "production") {
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
            session: {
                id: getSessionId(),
            },
        });
    } else {
        console.log("dev environment detected -> disabling faro");
    }
}
