import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const History = () => {
  return (
    <Layout>
     <h1>History</h1>
     <p className="text-right"><Link to="/">back to page</Link></p>

    </Layout>
  )
}

export default History
