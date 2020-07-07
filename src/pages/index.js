import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import 'tachyons'
import '../styles/layoutNew.css'

const IndexPage = () => (
  <Layout id='newIndex'>
    <SEO title="Home" />
    <Logo />
    <div className='flex items-center tc vh-100 pa0'>
      <div className='w-70 center v-mid ml3 mr3 br3 white' >
        <h1>The cleanest water bottle ever invented.</h1>
        <p>Sign up now for pre-launch updates and early bird pricing.</p>
        <p>Click the link below for more info.</p>  
        <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="/signup">Click here</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage