import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'tachyons'
import '../styles/layoutNew.css'

const oldIndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='flex items-center tc vh-100 pa0'>
      <div className='w-50 vh-100'>
        <Image  />
      </div>
      <div className='w-60 v-mid ml3 mr3 br3'>
        <h1>The cleanest water bottle ever invented.</h1>
        <p>Let's save the world one plastic bottle at at a time</p>
        <br/>
        <p>Click the link below for more info.</p>  
        <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="/signup">Click here</a>
      </div>
    </div>
  </Layout>
)

export default oldIndexPage

      //style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}