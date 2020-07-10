import React from "react";
import {Link} from 'gatsby'
import '../styles/layoutNew.css';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//import LogoPic from '../images/origen-logo.png'




const Logo = () => {

	const data = useStaticQuery(graphql`
		query MyQuery {
  		file(relativePath: {eq: "origen-logo.png"}) {
  		  childImageSharp {
  		    fluid {
						...GatsbyImageSharpFluid
  		    }
  		    fixed (width: 200) {
						...GatsbyImageSharpFixed
  		    }
  		  }
  		}
		}
 `)

	return(
  	<div className='absolute w-20-m w-20-ns top-0 left-0'>
	  	<Link to='/'>
	  	    <Img fluid={data.file.childImageSharp.fluid}/>
  	  </Link>
  	</div>
  )
}

export default Logo;