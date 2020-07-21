import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import 'tachyons'
import '../styles/layoutNew.css'


const IndexPage = () => (
  <Layout id='newIndex'>
    <SEO title="Home" />
    <div className='flex items-center tc vh-100 pa0 '>
      <div className='w-70 center v-mid ml3 mr3 br3 white' >
        <h1 className="text-shadow">The cleanest water bottle ever invented.</h1>
        <p className="text-shadow">Sign up now for pre-launch updates and early bird pricing.</p>
        <p className="text-shadow">Click the link below for more info.</p>  
        <Link className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" to="/signup">Click here</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage