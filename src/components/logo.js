import React from "react";
import '../styles/layoutNew.css';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LogoPic from '../images/origen-logo.png'


const Logo = () => (
  <div className='absolute w-20-m top-0 left-0'>
    <a href='/'>
      <img 
        src={LogoPic} 
        alt="Origen Logo"  
        width="200px"/>
    </a>
  </div>
)

export default Logo;