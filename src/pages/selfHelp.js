import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"


const SelfHelp = () => {
  return (
    <Layout>
     <h1>Self Help</h1>
     <p className="text-right"><Link to="/">back to page</Link></p>
    </Layout>
  )
}

export default SelfHelp
