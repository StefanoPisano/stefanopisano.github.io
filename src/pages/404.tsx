import * as React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

interface SiteMetadata {
    title: string;
}

interface NotFoundPageProps {
    data: {
        site: {
            siteMetadata: SiteMetadata;
        };
    };
    location: Location;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
