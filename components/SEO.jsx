import Head from "next/head";

const SEO =({title, description, keywords, url}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="og:url" content={url} />
        <meta name="viewport" content="width=device-width, initial-scalw=1.0" />
    </Head>
);

SEO.defaultProps = {
    title: "Default Title",
    description: "Default Description",
    keywords: "keyword1, keyword2",
    url: "https://example.com"
}

export default SEO;