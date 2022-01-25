module.exports = {
  pathPrefix: "/nicogelato.github.io",
  siteMetadata: {
    siteUrl: "https://www.nicogelato.github.io",
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
