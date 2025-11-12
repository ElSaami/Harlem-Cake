// next.config.mjs
const isProd = process.env.GITHUB_ACTIONS === 'true';
const repo = 'Harlem-Cake'; // nombre EXACTO del repo (respeta mayúsculas)

const nextConfig = {
  output: 'export',               // genera ./out para GitHub Pages
  images: { unoptimized: true },  // necesario en GH Pages (sin Image Optimization)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
};

export default nextConfig;
