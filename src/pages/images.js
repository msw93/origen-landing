import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({data}) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: {eq: "Beach2.jpg"}) {
      id
      childImageSharp {
        fluid {
          src
          srcSet
          aspectRatio
          base64
          sizes
        }
      }
    }
  }
`
export default Image;