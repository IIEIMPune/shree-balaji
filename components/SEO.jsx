import Head from "next/head";

const SEO = ({title, description, keywords}) => (
    <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scalw=1.0" />
    </Head>
);

    SEO.defaultProps = {
    title: "Shree Balaji Exim",
    description: "Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001.",
    keywords: "Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery, import export businesses, export-import, construction machinery, import exports",
}

export default SEO;