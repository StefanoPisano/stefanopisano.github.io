import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"

interface SeoProps {
    description: string,
    title: string,
    children: React.ReactNode
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

const Seo : React.FC<SeoProps> = ({description, title, children}) => {
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

    const metaDescription = description || site.siteMetadata.description

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={metaDescription}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:type" content="website"/>
            {children}
        </>
    )
}

export default Seo