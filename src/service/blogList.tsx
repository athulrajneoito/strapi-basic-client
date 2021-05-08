import Axios from "axios";
import config from "../config";
import {getItem} from '../helpers/localStorage';
import { User } from "../interfaces/interface";

const user:User =JSON.parse(getItem('user')) ;
const token = user.jwt;
console.log(user);

const headers={
  Authorization:`Bearer ${token}`
}
export const getBlogs = async () => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs`);
  return blogs.data || [];
};

export const getBlogById = async (id:string) => {
  const blogs = await Axios.get(`${config.basuUrl}/blogs/${id}`);
  return blogs.data || [];
};
export const createBlog = async (data:any) => {
  const blogs = await Axios.post(`${config.basuUrl}/blogs`,data,{ headers });
  return blogs.data || [];
};
