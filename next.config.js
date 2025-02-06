/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data:;
  script-src 'self' 'unsafe-eval' cdn.nav.no;
  worker-src 'self' blob:;
  style-src 'self' 'unsafe-inline' nav.no;
  font-src 'self' nav.no;
  frame-src 'self' video.qbrick.com;
  connect-src 'self' amplitude.nav.no sentry.gc.nav.no umami.nav.no;
`;

const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
    },
];

const { i18n } = require("./next-i18next.config");

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@navikt/arbeidsplassen-react"],
    async headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },
    i18n: {
        ...i18n,
        localeDetection: false,
    },
};

module.exports = nextConfig;

const { withSentryConfig } = require("@sentry/nextjs");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) =>
    phase === PHASE_DEVELOPMENT_SERVER
        ? nextConfig
        : withSentryConfig(
              nextConfig,
              {
                  silent: true,
                  org: "nav",
                  project: "arbeidsplassen",
                  url: "https://sentry.gc.nav.no/",
              },
              {
                  widenClientFileUpload: true,
                  tunnelRoute: "/monitoring",
                  hideSourceMaps: true,
              },
          );
