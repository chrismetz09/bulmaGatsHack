import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import { Link } from "gatsby"


const IndexPage = ({ data }) => {
  return (


    <div className="container">
      <section className="hero is-link is-small section">
        <div className="hero-body">
          <p className="title">
            {data.site.siteMetadata.blogtitle}
          </p>
          <p className="subtitle">
            {data.site.siteMetadata.blogsubtitle}
          </p>
        </div>
      </section>
      <section className="is-small section">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <p>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>{" "}
                  {node.frontmatter.date}
                  {node.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <p>test section</p>
      </section>
      <section className="section">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png"></img>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>name of blog</strong>
                <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor
                  vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                blogtitle
                blogsubtitle
            }
        }
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

export default IndexPage