import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import * as styles from "./Contacts.module.css";

interface Author {
    linkedin: string,
    github: string,
}

interface SiteMetadata {
    author: Author
}

interface SiteData {
    site: {
        siteMetadata: SiteMetadata
    }
}

const Contacts : React.FC = () => {
    const data : SiteData = useStaticQuery(graphql`
    query ContactsQuery {
      site {
        siteMetadata {
          author {
            linkedin,
            github
          }
        }
      }
    }
  `)

    return (
        <>
            <div className={styles.contacts__div}>Find me on <a href={data.site.siteMetadata.author.linkedin}>LinkedIn</a> or <a
                href={data.site.siteMetadata.author.github}>GitHub</a></div>
        </>
    )
}

export default Contacts;