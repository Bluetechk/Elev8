import { useEffect } from 'react';

// The live production origin. Update this single constant if the domain
// changes (it also needs updating in public/robots.txt and public/sitemap.xml).
export const SITE_URL = 'https://elev8inc.netlify.app';

const SITE_NAME = 'Elev8 Inc.';
const DEFAULT_IMAGE = `${SITE_URL}/elev8_logo.jpeg`;

type SeoProps = {
  /** Page title. Shown in the tab and as og:title / twitter:title. */
  title: string;
  /** ~150–160 char summary for search results and social cards. */
  description: string;
  /** Route path including the leading slash, e.g. '/library'. Drives canonical + og:url. */
  path: string;
  /** Optional share image (absolute URL or root-relative path). Falls back to the logo. */
  image?: string;
};

// Update a <meta> tag in place, creating it if the static index.html didn't
// already ship one. Keeping a single tag per key avoids duplicates on
// client-side route changes.
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Per-route SEO. React Router renders this once per page; it updates the
 * document head so search engines that execute JS pick up page-specific
 * titles, descriptions, canonical URLs, and social cards.
 */
const Seo = ({ title, description, path, image }: SeoProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_IMAGE;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);
  }, [title, description, path, image]);

  return null;
};

export default Seo;
