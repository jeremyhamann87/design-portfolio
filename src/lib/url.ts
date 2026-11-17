/** Prefix an internal path with the site's base path ("/" on www.jeremyhamann.co, "/design-portfolio" on the github.io fallback). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}
