import React from "react";
import { Helmet } from "react-helmet";

export const MetaTag = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="canonical" href="https://lendqsr.com" />
        <meta name={props.desc} content={props.content} />
      </Helmet>
    </>
  );
};
