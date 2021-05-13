import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const BiographyPage = () => {
  return (
    <Layout>
     <h1>Biography</h1>
     <p className="text-right"><Link to="/">back to page</Link></p>

    </Layout>
  )
}

export default BiographyPage
