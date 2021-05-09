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
export interface newUser{
  username:string,
  password:string,
  email:string
}


export interface loginUser{
  identifier:string,
  password:string,

}
export interface resetPassword{
  password:string,
  passwordConfirmation:string,
  code:string

}
