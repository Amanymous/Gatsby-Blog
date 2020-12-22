import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/Blogs.css";

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: date, order: ASC }) {
        edges {
          node {
            date
            main
            subName
            paragraph {
              paragraph
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="content">
        <h2>Famous Blog</h2>
      </div>
      {data.allContentfulBlog.edges.map((edge: any) => {
        return (
          <div className="blog">
            <div className="blog__detail">
              <h2>{edge.node.subName}</h2>
              <p>{edge.node.paragraph.paragraph}</p>
              <h5>{edge.node.date} @2020</h5>
            </div>
          </div>
        );
      })}
      <div className="best__blog">
        <h2>Find Out Famous Blogs</h2>
        <h2>See Here</h2>
      </div>
    </>
  );
};
export default Blogs;
