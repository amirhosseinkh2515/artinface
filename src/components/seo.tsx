import React from 'react';
import Head from 'next/head';

type SeoProps = {
  title: any;
  description: string;
  canonical?: string;
  structuredJSON?: any;
  image?: any;
  og_description?: string
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  structuredJSON,
  image,
  og_description
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={og_description ? og_description : description} />
    <meta property="og:site_name" content={"بانک زمان"} />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" />
    {image && <meta property="og:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {structuredJSON && <script className='structured-data-list' dangerouslySetInnerHTML={{ __html: structuredJSON }} type="application/ld+json" ></script>}
  </Head>
);
