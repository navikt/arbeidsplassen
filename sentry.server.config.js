// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://c1af8a3483f446809fdc37059ece5252@sentry.gc.nav.no/170",
    tracesSampleRate: 0.1,
    debug: false,
});
