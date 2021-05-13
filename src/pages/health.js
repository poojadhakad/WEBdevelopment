import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Health = () => {
  return (
    <Layout>
     <h1>Health</h1>
     <p className="text-right"><Link to="/">back to page</Link></p>

    </Layout>
  )
}

export default Health
