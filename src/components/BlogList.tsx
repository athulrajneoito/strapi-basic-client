import { getBlogs } from "../service/blogList";
import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { blog as blogInteface } from "../interfaces/interface";
import CreateBlog from "./CreateBlog";

const BlogList = () => {
  const [blogs, setblogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    async function fetchBlogs() {
      const blogData = await getBlogs();
      setblogs(blogData);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center px-2">
        <h1 className="text-center">Blog List</h1>
        <button className="btn btn-primary px-4 h-auto" onClick={()=>setShowModal(true)}>Add Post</button>
      </div>
      <div className="d-flex flex-wrap">
        {blogs.length &&
          blogs.map((blog: blogInteface) => {
            return <BlogItem key={blog.id} blog={blog}></BlogItem>;
          })}
      </div>
      <CreateBlog show={showModal} handleClose={async()=>setShowModal(false)}></CreateBlog>
    </div>
  );
};

export default BlogList;
