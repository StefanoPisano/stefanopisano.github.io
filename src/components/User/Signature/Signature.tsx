import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from "./Signature.module.css";
import Paragraph from "../../UI/Paragraph/Paragraph";

interface Author {
    name: string,
    summary: string,
    motto: string,
    linkedin: string
}

interface SiteMetadata {
    author: Author
}

interface SiteData {
    site: {
        siteMetadata: SiteMetadata
    };
}

const Signature: React.FC = () => {
    const data: SiteData = useStaticQuery(graphql`
    query signatureQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            motto,
            linkedin
          }
        }
      }
    }
  `);

    const author = data.site.siteMetadata?.author;

    return (
        <div className={styles.signature__div}>
            <StaticImage
                className="rounded-image"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../../images/profile-pic.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <Paragraph paragraphClass={styles.signature__p}>
                    <a href={author.linkedin}>
                        <strong>{author.name}</strong>
                    </a>{" "}
                    is a {author?.summary || null}
                    <br />
                    <strong>{author?.motto}</strong>
                </Paragraph>
            )}
        </div>
    );
};

export default Signature;
