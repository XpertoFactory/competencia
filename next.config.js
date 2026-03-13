const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export not possible due to dynamic routes ([profileId], [evaluationId], [linkId])
  // Use Firebase Hosting with web framework support or deploy to Vercel instead
  async redirects() {
    return [
      // Legacy route renamed to /features
      { source: '/:locale/instructions', destination: '/:locale/features', permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
