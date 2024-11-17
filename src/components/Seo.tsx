import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"

interface SeoProps {
    title: string
}

interface SiteMetadata {
    title: string;
    description: string;
}

interface QueryResult {
    site: {
        siteMetadata: SiteMetadata;
    };
}

const Seo : React.FC<SeoProps> = ({title}) => {
    const {site} = useStaticQuery<QueryResult>(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    )

    const metaDescription = site.siteMetadata.description

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={metaDescription}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:type" content="website"/>
        </>
    )
}

export default Seo