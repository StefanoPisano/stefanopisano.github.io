import * as React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import UserGreetings from "../components/User/UserGreetings";
import Divider from "../components/UI/Divider/Divider";
import Articles from "../components/Blog/Articles";
import Seo from "../components/Seo";

interface FrontMatter {
    date: string;
    title: string;
    description: string;
}

interface Article {
    excerpt: string;
    fields: {
        slug: string;
    };
    frontmatter: FrontMatter;
}

interface BlogIndexProps {
    data: {
        allMarkdownRemark: {
            nodes: Article[];
        };
    };
    location: Location; // You can use a more specific type if needed
}

const Index: React.FC<BlogIndexProps> = ({ data, location }) => {
    const posts =  data.allMarkdownRemark.nodes;

    return (
        <Layout location={location} title="">
            <UserGreetings />
            <Divider label={"Posts"} />
            <Articles posts={posts} />
        </Layout>
    );
};

export default Index;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title={"Hello! I'm Stefano"}/>

export const pageQuery = graphql`
{
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
