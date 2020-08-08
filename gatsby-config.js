require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Natural beauty, Skincare, Recipes and More - BodyJutsu`,
    name: `BodyJutsu`,
    siteUrl: `https://bodyjutsu.com`,
    description: `Browse hundreds of budget-friendly beauty & DIY tutorials for spa, skincare, cosmetics, hair maintenance and more, all vetted and tested by medical professionals and backed up with detailed step-by-step instruction!`,
    hero: {
      heading: `Natural beauty, Skincare, Recipes and More!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/bodyjutsu`,
      },
      // {
      //   name: `github`,
      //   url: `https://github.com/narative`,
      // },
      {
        name: `instagram`,
        url: `https://instagram.com/bodyjustu`,
      },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      {
        name: `facebook`,
        url: `https://facebook.com/bodyjutsu`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
