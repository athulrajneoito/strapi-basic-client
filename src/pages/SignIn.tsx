import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { setItem } from "../helpers/localStorage";
import { LoginUser } from "../service/auth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const history  =useHistory();
    /**
   * Function to update state for forms
   * @param value field value
   * @param field field name
   */
     const updateForm = (value: any, field: string) => {

      let newValue: any = { ...formData };
      newValue[field] = value;
      setFormData(newValue);
    };
    /**
     * Function to submit Form
     * @param event mouse click event
     */
    const submitForm = async (event: FormEvent) => {
      event.preventDefault();
      const newUser = await LoginUser(formData);
      console.log(newUser);
      if(newUser){
          setItem('user',newUser?.data);
          // history.push('/blogs')
        }


    };
  return (
    <div>
      <form onSubmit={(e: FormEvent) => submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address or Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "identifier")
            }
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "password")
            }
          ></input>
        </div>
        <p>Forgot Password?</p>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <div className="my-3">
        <Link to="/auth/signup">Dont have an account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
