const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Firebase Hosting if needed
  // output: 'export',
};

module.exports = withNextIntl(nextConfig);
