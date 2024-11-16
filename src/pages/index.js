import * as React from "react"
import {useState} from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro";
import Divider from "../components/divider";

const BlogIndex = ({data, location}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const allPosts = [] || data.allMarkdownRemark.nodes;

    const maxElements = 2;
    const posts = [];

    for (let i = 0; i < allPosts.length; i += maxElements) {
        const chunk = allPosts.slice(i, i + maxElements);
        posts.push(chunk);
    }

    const handleChangePage = (page) => setCurrentPage(page);

    return (
        <Layout location={location} title={siteTitle}>
            <Intro/>
            <Divider label={"Posts"}/>
            {posts.length === 0 || posts[currentPage]?.length === 0 ? (
                <p>No posts found :c</p>
            ) : (
                <>
                    <ol style={{listStyle: `none`}}>
                        {posts[currentPage].map(post => {
                            const title = post.frontmatter.title || post.fields.slug;

                            return (
                                <li key={post.fields.slug}>
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <Link to={post.fields.slug} itemProp="url">
                                                    <span itemProp="headline">{title}</span>
                                                </Link>
                                            </h2>
                                            <small>{post.frontmatter.date}</small>
                                        </header>
                                        <section>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.frontmatter.description || post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </section>
                                    </article>
                                </li>
                            );
                        })}
                    </ol>

                    <ol className="blog-pagination" style={{listStyle: `none`}}>
                        {posts.map((_, i) => {
                            return (
                                <li key={i} className={currentPage === i ? 'selected' : ''}
                                    onClick={() => handleChangePage(i)}>
                                    {i + 1}
                                </li>
                            );
                        })}
                    </ol>
                </>)}
        < /Layout>
    );
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Hello! I'm Stefano"/>

export const pageQuery = graphql`
{
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        nodes {
            excerpt
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
            }
        }
    }
}
`;

