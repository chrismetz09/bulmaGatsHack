---
slug: "/blog/my-first-post"
date: "2021-04-29"
title: "Blog Set #1"
---

You can create and deploy your markdown files using Gatsby. 

Gatsby-config.js file with plugin snippet code:
<br></br>
```
 plugins: [
      `bulma`,
      `node-sass`,
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-pages`,
        path: `${__dirname}/src/blog-pages`,
      },
    },
    ],
```

Enjoy!!