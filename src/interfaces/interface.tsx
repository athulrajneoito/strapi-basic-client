export interface blog {
  id?: number;
  title: string;
  content: string;
  featureImage?:object|any
}
export interface createBlog {
  handleClose:()=>{},
  show:boolean
}

export interface User {
  jwt:string,
  user:object
}