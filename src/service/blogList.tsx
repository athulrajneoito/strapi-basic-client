import Axios from "axios";
import config from "../config";
import { getItem } from "../helpers/localStorage";
import { User } from "../interfaces/interface";

let user:User;
let token:any;
if(getItem("user")){
  user = JSON.parse((getItem("user")));
  token = user.jwt;

}

const headers = {
  Authorization: `Bearer ${token}`,
};
export const getBlogs = async () => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs`);
  return blogs.data || [];
};

export const getBlogById = async (id: string) => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs/${id}`);
  return blogs.data || [];
};
export const createBlog = async (data: any) => {
  const blogs = await Axios.post(`${config.basuUrl}/blogs`, data, { headers });
  return blogs.data || [];
};
