// next.config.js
/** @type {import('next').NextConfig} */
const isGH = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Opcional si publicas bajo /<repo>:
  ...(process.env.GITHUB_ACTIONS === 'true' ? {
    basePath: '/<TU_REPO>',
    assetPrefix: '/<TU_REPO>/',
  } : {}),
};

