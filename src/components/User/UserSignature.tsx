import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

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

const UserSignature: React.FC = () => {
    const data: SiteData = useStaticQuery(graphql`
    query BioQuery {
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
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    <a href={author.linkedin}>
                        <strong>{author.name}</strong>
                    </a>{" "}
                    is a {author?.summary || null}
                    <br />
                    <strong>{author?.motto}</strong>
                </p>
            )}
        </div>
    );
};

export default UserSignature;
