import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import * as styles from "./UserGreetings.module.css"

interface Author {
    name: string,
    linkedin: string,
    github: string,
    spotify: string
}

interface SiteMetadata {
    author: Author
}

interface SiteData {
    site: {
        siteMetadata: SiteMetadata
    }
}

const UserGreetings: React.FC = () => {
    const data : SiteData = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author {
            name,
            linkedin,
            github,
            spotify
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div className={styles.intro}>
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpg"
                width={128}
                height={128}
                quality={100}
                alt="Profile picture"
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Hello!<br/></h1>
                <p className={styles.subtitle}>I am <span className={styles.name}>{author.name}</span></p>

                <p className={styles.paragraph}>
                    I am an italian <span className={styles.accent}>software developer</span> based in Milan.<br/>
                    I strongly believe in good practices and team working.
                </p>

                <p className={styles.paragraph}>
                    My passion for software development dates back to my childhood, when I would spend hours tinkering
                    with CSS
                    and HTML to create unique themes for an online forum.
                    This love propelled me towards a career in software development, which I officially began in 2016.
                </p>

                <p className={styles.paragraph}>
                    I thrive in an environment where teamwork is appreciated and encouraged.
                    Collaborating with others to exchange ideas, knowledge and even unwind with a refreshing beer, is
                    what makes
                    work meaningful and enjoyable to me.
                </p>

                <p className={styles.paragraph}>
                    While writing code I always try to apply some magic tricks which will transform bad code into clean
                    code.<br/>
                    My passion lies in keeping things simple.
                </p>

                <p className={styles.paragraph}>
                    If you are interested on my technical skills you can check my <a className={styles.link}
                                                                                     href={author.linkedin}>LinkedIn</a> profile
                    or follow me on <a className={styles.link} href={author.github}>Git Hub</a>.
                </p>

                <p className={styles.paragraph}>
                    Although coding is a significant part of my life, I find balance in my diverse passions. <span
                    className={styles.accent}>Music</span> has always held a special place in my heart, and I eagerly
                    explore
                    every
                    genre.
                    In my free time I like being a self-taught guitar player, you can find me on <a
                    className={styles.link}
                    href={author.spotify}>Spotify</a> sharing
                    my favorite tunes.
                    I'm also fascinated by <span className={styles.accent}>photography</span> and love to capture the
                    beauty
                    of <span
                    className={styles.accent}>nature</span> during hikes.
                </p>
            </div>
        </div>
    )
}

export default UserGreetings
