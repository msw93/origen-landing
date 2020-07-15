import React from "react";
import {Link} from 'gatsby'
import '../styles/layoutNew.css';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import logoSVG from '../images/origenLogoWhite.svg'




export const Logo = () => {

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

	const logoJPG = data.file.childImageSharp.fluid;


	return(
  	<div className='absolute w-20-m w-20-ns top-0 left-0'>
	  	<Link to='/'>
	  	    <Img fluid={logoJPG}/>
  	  </Link>
  	</div>
  )
}

export const LogoSVG = () => {
	return (
		<div className='w-10-l w-20-m w-30-ns w-30 pa2 absolute top-0 left-0'>
			<Link to='/'>
				<img className='' src={logoSVG} alt={`Origen Logo`}/>
			</Link>
		</div>
	)

}


export default Logo;