import * as Sentry from "@sentry/nextjs";
import getSessionId from "@/src/common/utils";

export default function setSentryUserProperties(data) {
    console.log(`VERSION: ${process.env.NEXT_PUBLIC_APP_NAME}@${process.env.NEXT_PUBLIC_APP_VERSION}`);
    console.log(`VERSION_TAG: ${process.env.VERSION_TAG}`);
    Sentry.setUser({ ...data, user: getSessionId() });
}
