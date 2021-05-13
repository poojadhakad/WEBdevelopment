import React from "react"
import Layout from "../components/layout"
import Body from "../components/body"
// import Features from "../components/features"
import Bookkss from "../components/bookss"
import HeroSection from "../components/hero"
const IndexPage = () => {
  return (
    <Layout>
       <HeroSection/>
      <Body />
     <Bookkss/>
      {/* <Features /> */}
    </Layout>
  )
}

export default IndexPage

