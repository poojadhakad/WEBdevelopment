import { Link } from "gatsby"
import React from "react"
import {Button} from "react-bootstrap"
import "../styles/hero.scss"
// import scrollTo from 'gatsby-plugin-smoothscroll';



function HeroSection() {
return(
<div className="hero-container">
    <h1>A FREE PATH TO BOOKS</h1>
<p>Increase Your Knowledge</p>
<div className="hero-btns">
    <Button  variant="dark"  block><Link to="/about" className="text-light">Read More</Link></Button>
</div>
</div>
)
}

export default HeroSection