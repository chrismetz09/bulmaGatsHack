---
slug: "/blog/my-second-post"
date: "2021-04-30"
title: "Blog Set #2"
---

You can create and deploy your multiple markdown files using Gatsby. 

Exported graphql api from a page component:
```
 export const pageQuery = graphql`
   query($slug: String!) {
     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
       html
       frontmatter {
         date(formatString: "MMMM DD, YYYY")
         slug
         title
         excerpt
       }
     }
   }
 `
```

Getting there.