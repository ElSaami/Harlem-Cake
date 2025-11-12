// next.config.ts
const isProd = process.env.GITHUB_ACTIONS === 'true';
const repo = 'Harlem-Cake'; // <-- nombre EXACTO del repo

const nextConfig = {
  output: 'export',                 // genera ./out con `next build`
  images: { unoptimized: true },    // necesario en GH Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
