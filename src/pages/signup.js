import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/Form2'
import 'tachyons'
import '../styles/layoutNew.css'


const Signup = () => (
  <Layout>
  	<div className="pt4 flex flex-column items-center tc">
	  	<SEO title="Sign Up" />
	  	<h1 id='signupMsg'className="pa3 white text-shadow">To find out more signup below</h1>
	  	<Form />	
  		<br />
  	  <Link className="white no-underline bottom-0 text-shadow-light"to="/">Go back to the homepage</Link>
  	</div>  
  </Layout>
)

export default Signup

	// <a href='https://mailchi.mp/812393d33dfb/mikesfriends'> Click Here </a>