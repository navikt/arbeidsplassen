/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data:;
  script-src 'self' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com nav.no;
  font-src 'self' fonts.googleapis.com fonts.gstatic.com nav.no;
  connect-src 'self' amplitude.nav.no telemetry.ekstern.dev.nav.no telemetry.nav.no;
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

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
    module.exports,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses source map uploading logs during build
        silent: true,
        org: "nav",
        project: "arbeidsplassen",
        url: "https://sentry.gc.nav.no/",
    },
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Transpiles SDK to be compatible with IE11 (increases bundle size)
        transpileClientSDK: true,

        // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
        tunnelRoute: "/monitoring",

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,
    },
);
