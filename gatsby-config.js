/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `aboutyin.de`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ 
    "gatsby-plugin-styled-components",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  }]
};