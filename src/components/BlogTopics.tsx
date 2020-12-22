import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/BlogTopics.css";

const BlogTopics = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogType {
        edges {
          node {
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <div className="hello">
        <h2>Hello!</h2>
        <h3>See New Blogs</h3>
      </div>
      <div className="blog__content">
        {data.allContentfulBlogType.edges.map((edge: any) => {
          return (
            <div className="blog__detail">
              <div className="blog__info">
                <img src={edge.node.image.file.url} />
                <h4>{edge.node.title} </h4>
              </div>
              {/* import "../styles/Blogs.css" */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BlogTopics;
