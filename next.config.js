const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['en', 'zh', 'zh-tw', 'vi', 'de', 'es', 'fr', 'pt', 'ru', 'tr', 'ko', 'ja'],
    defaultLocale: 'en',
  },
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
