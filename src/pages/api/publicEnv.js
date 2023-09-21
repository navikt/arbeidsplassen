const getAppVersion = () => {
    // example: NAIS_APP_IMAGE=europe-north1-docker.pkg.dev/nais-management-233d/teampam/pam-stillingsok:23.256.125825
    if (process.env.NAIS_APP_IMAGE) {
        const splitted = process.env.NAIS_APP_IMAGE.split("/");
        if (splitted.length > 0) {
            const appVersion = splitted[splitted.length - 1].replace(":", "@");
            return appVersion; // example: pam-stillingsok@23.256.125825
        }
    }
    return "";
};

function getPublicEnv() {
    // Load public env vars here
    return {
        APP_VERSION: getAppVersion(),
        TELEMETRY_URL: process.env.TELEMETRY_URL,
    };
}

export default async (req, res) => {
    res.status(200).setHeader("content-type", "application/javascript").send(`
        window.publicEnv = ${JSON.stringify(getPublicEnv())}
    `);
};
