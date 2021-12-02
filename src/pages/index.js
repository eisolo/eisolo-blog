import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      
        <p>home is where this text is</p>
    
        <Link to="/blog/">
          <Button marginTop="10px">blog link</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
