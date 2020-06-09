/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xj6nlv3f",
        dataset: "production",
      },
    },
  ],
}
