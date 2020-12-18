import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC = () => (
  <Layout>
    Hello world!<Link to="/blog/">blog page</Link>
    <h1>hello styling</h1>
    <div className="container">
      <div className="row">
        <div className="col-4">hello</div>
        <div className="col-4">hello</div>
        <div className="col-4">hello</div>
      </div>
    </div>
  </Layout>
)
export default IndexPage