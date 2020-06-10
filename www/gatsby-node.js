exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  createPage({
    path: "/singles",
    component: require.resolve("./src/templates/template-singles.js"),
  })

  const result = await graphql(`
    query {
      allSanitySingle {
        edges {
          node {
            _id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("error loading data", reporter.errors)
  }

  const singles = result.data.allSanitySingle.edges.map(({ node }) => node)
  singles.forEach(single => {
    createPage({
      path: `/single/${single.slug.current}`,
      component: require.resolve("./src/templates/template-single.js"),
      context: {
        slug: single.slug.current,
      },
    })
  })
}
