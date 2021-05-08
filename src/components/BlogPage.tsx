import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../service/blogList";
import config from "../config";
import { blog as blogInteface } from "../interfaces/interface";

const BlogPage = () => {
  let { id }: any = useParams();

  const [blog, setblog] = useState<blogInteface>({content:'',featureImage:null,id:0,title:''});


  useEffect(() => {
    async function fetchBlogs() {
      const blogData = await getBlogById(id);
      setblog(blogData);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <img
        src={config.basuUrl + blog.featureImage?.url}
        className="blog-image"
        alt="blogImage"
      ></img>
      <h1>{blog.title}</h1>

      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
