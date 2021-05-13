import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const FictionPage = () => {
  return (
    <Layout>
     <h1>fiction</h1>
     <p className="text-right"><Link to="/">back to page</Link></p>

    </Layout>
  )
}

export default FictionPage
