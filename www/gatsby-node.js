exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  createPage({
    path: "/singles",
    component: require.resolve("./src/templates/template-singles.js"),
  })
  createPage({
    path: "/albums",
    component: require.resolve("./src/templates/template-albums.js"),
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
      allSanityAlbum {
        edges {
          node {
            name
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
  const albums = result.data.allSanityAlbum.edges.map(({ node }) => node)
  albums.forEach(album => {
    createPage({
      path: `/album/${album.slug.current}`,
      component: require.resolve("./src/templates/template-album.js"),
      context: {
        slug: album.slug.current,
      },
    })
  })
}
