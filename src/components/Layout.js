import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { IconContext } from 'react-icons';
import { siteMetadata } from "../../gatsby-config";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <meta name="description" content={siteMetadata.description} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    </Helmet>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      {children}
    </IconContext.Provider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
