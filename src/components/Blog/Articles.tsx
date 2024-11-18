import * as React from "react";
import {useState} from "react";
import {Link} from "gatsby";
import Pagination from "../UI/Pagination/Pagination";

interface FrontMatter {
    title: string,
    date: string,
    description: string
}

interface Article {
    frontmatter: FrontMatter;
    fields: {
        slug: string;
    };
    excerpt: string;
}

interface ArticlesProps {
    posts: Array<Article>;
}

const Articles: React.FC<ArticlesProps> = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const maxElements = 2;
    const paginatedPosts = [];

    for (let i = 0; i < posts.length; i += maxElements) {
        const chunk = posts.slice(i, i + maxElements);
        paginatedPosts.push(chunk);
    }

    const handlePageChange = (page:number) => setCurrentPage(page);

    return (
        <>
            {paginatedPosts.length === 0 ? (
                <p>No posts found :c</p>
            ) : (
                <ol style={{listStyle: `none`}}>
                    {paginatedPosts[currentPage].map(post => {
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

                    <Pagination
                        pages={paginatedPosts.map((_, i) => i.toString())}
                        onButtonClick={handlePageChange}/>
                </ol>
            )}
        </>
    );
};

export default Articles;
