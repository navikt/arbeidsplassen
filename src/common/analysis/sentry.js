import * as Sentry from "@sentry/nextjs";
import getSessionId from "@/src/common/utils";

export default function setSentryUserProperties(data) {
    console.log("NEXT_PUBLIC_VERSION_TAG: ", process.env.NEXT_PUBLIC_VERSION_TAG);
    Sentry.setUser({ ...data, user: getSessionId() });
}
