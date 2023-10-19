/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data:;
  script-src 'self' 'unsafe-eval';
  worker-src 'self' blob:;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com nav.no;
  font-src 'self' fonts.googleapis.com fonts.gstatic.com nav.no;
  connect-src 'self' amplitude.nav.no telemetry.ekstern.dev.nav.no telemetry.nav.no sentry.gc.nav.no;
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
                  release: `arbeidsplassen@${process.env.NEXT_PUBLIC_VERSION_TAG}`,
              },
              {
                  widenClientFileUpload: true,
                  tunnelRoute: "/monitoring",
                  hideSourceMaps: true,
              },
          );
