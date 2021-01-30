module.exports = {
  siteMetadata: {
    title: `Claudia Rivera — Desarrolladora Frontend`,
    description: `Mi portafolio personal, desarrollado con React y Gatsby `,
    author: `Claudia Rivera`,
    url: `http://claudiarivera.netlify.com`,
    image: `./src/images/portatil-coding.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Claudia Rivera — Desarrolladora Frontend`,
        short_name: `CR`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#2137FC`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    }

  ],
}
