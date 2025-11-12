export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : '';

export const withBasePath = (p: string) =>
  p.startsWith('http') ? p : `${basePath}${p}`;
