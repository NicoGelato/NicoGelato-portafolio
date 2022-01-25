module.exports = {
  pathPrefix: "/NicoGelato-portafolio",
  siteMetadata: {
    siteUrl: "https://www.nicogelato.gatsbyjs.io",
    title: "NicolasGelato Portafolio",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
