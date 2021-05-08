import React from "react";
import { blog as blogInteface } from "../interfaces/interface";
import { useHistory } from "react-router-dom";
import config from "../config";
const BlogItem = ({ blog }: any) => {
    const history = useHistory();


  const goToBLog = () => {
    history.push(`blogs/${blog.id}`);
  };


  return (
    <div className=" col-md-3 col-6 p-2">
      <div className="card" onClick={() => goToBLog()}>
        <img
          src={config.basuUrl + blog.featureImage.url}
          className="card-img-top"
          alt="blogImage"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
