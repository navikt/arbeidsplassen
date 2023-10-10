import * as Sentry from "@sentry/nextjs";
import { getSessionId } from "@amplitude/analytics-browser";

export default function setSentryUserProperties(data) {
    Sentry.setUser({ ...data, user: getSessionId });
}
