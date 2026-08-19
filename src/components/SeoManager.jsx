import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE } from '../data/seo';

export default function SeoManager() {
  const { pathname } = useLocation();
  const { title, description } = getSeo(pathname);
  const url = `${SITE}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
      page_title: title,
    });
  }, [pathname, title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Novo Robotic Surgery Centre" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}