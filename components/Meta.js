import React from "react";
import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web dev news",
  keywords: "web developpement, programming",
  descirption: "Get latest news",
};

export default Meta;
