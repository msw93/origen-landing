import React from "react";
import '../styles/layoutNew.css';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LogoPic from '../images/droplet.png'


const Logo = () => (
  <div>
    <img src={LogoPic} alt="Origen Logo" />
  </div>
)

export default Logo;