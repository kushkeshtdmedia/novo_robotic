import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE } from '../data/seo';
import { getSchema } from '../data/schemas';
import { organizationSchema } from '../data/schemas/organization';

export default function SeoManager() {
  const { pathname } = useLocation();
  const { title, description } = getSeo(pathname);
  const url = `${SITE}${pathname === '/' ? '/' : pathname}`;
  const pageSchema = getSchema(pathname);
  const isHome = pathname === '/';

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

      {/* Full clinic details sirf home page par — inner pages apna Organization node khud rakhte hain */}
      {isHome ? (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      ) : null}

      {/* Page-specific schema — Service, FAQ, Breadcrumb wagairah */}
      {pageSchema ? (
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      ) : null}
    </Helmet>
  );
}