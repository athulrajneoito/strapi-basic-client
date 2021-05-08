import {getBlogs} from '../service/blogList';
import { useEffect,useState } from "react";
import BlogItem from './BlogItem';
import {blog as blogInteface} from '../interfaces/interface'

const BlogList = () => {

    const [blogs,setblogs]=useState([]);

    useEffect(() => {
        async function fetchBlogs(){
            const blogData = await getBlogs();
            setblogs(blogData)
        }
       fetchBlogs()
      },[]);

    

    return (
        <div className="container">
            <h1 className="text-center">Blog List</h1>
            <div className="d-flex flex-wrap">

            {blogs.length && blogs.map((blog:blogInteface)=>{
               return <BlogItem key={blog.id} blog={blog}></BlogItem>
            })}
            </div>
       
            
        </div>
    )
}

export default BlogList;
