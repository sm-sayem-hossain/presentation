/** Resolves a public/ asset against the configured Vite base path. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
