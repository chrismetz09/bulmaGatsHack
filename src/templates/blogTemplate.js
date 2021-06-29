import React from "react"
import { graphql } from "gatsby"

export default function Template({
                                   data // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <div className="container">
      <section className="hero is-link is-small section">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-offset-1 is-10">
              <p className="title is-1">
                {frontmatter.title}
              </p>
              <p className="subtitle is-3">
                {frontmatter.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column is-offset-1 is-10">
            <div className="block">
              <p className="title is-4">{frontmatter.title}</p>
              <p className="subtitle is-6">{frontmatter.date}</p>
            </div>
            <div
              className="is-size-6 block"
              dangerouslySetInnerHTML={{ __html: html }}>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`


