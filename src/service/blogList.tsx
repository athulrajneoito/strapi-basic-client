import Axios from "axios";
import config from "../config";

export const getBlogs = async () => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs`);
  return blogs.data || [];
};

export const getBlogById = async (id:string) => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs/${id}`);
  return blogs.data || [];
};
