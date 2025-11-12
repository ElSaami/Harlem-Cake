// src/lib/paths.ts
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  // normaliza para evitar dobles //
  return `${base}${path}`.replace(/\/{2,}/g, "/");
}
