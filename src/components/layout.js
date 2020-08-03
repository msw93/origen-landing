/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { LogoSVG } from '../components/logo'

//import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Query {
      site {
        siteMetadata {
          title
        }
      } 
      file(relativePath: {eq: "Beach2.jpg"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className='layout'>

        <BackgroundImage           
          Tag="section"
          className='background__image cover vh-100-l h-100 '
          fluid={data.file.childImageSharp.fluid}
          backgroundColor={`#040e18`}>


          <main>
           <LogoSVG  />
           {children}
             {/* {console.log(data)} */}
    
             <footer className='white fixed bottom-0 right-0 f6 sans-serif'>
               © {new Date().getFullYear()}, 
               {` `}
               <a className='no-underline white pr1' href="/">Origen</a>
           </footer>
          </main>
        </BackgroundImage>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


// <Header siteTitle={data.site.siteMetadata.title} />


        // <footer className='fr'>
        //   © {new Date().getFullYear()}, 
        //   {` `}
        //   <a href="https://www.google.ca">Origen</a>
        // </footer>
