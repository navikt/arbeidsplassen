import * as Sentry from "@sentry/nextjs";
import getSessionId from "@/src/common/utils";

export default function setSentryUserProperties(data) {
    Sentry.setUser({ ...data, user: getSessionId() });
}
