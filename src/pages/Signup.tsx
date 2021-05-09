import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {} from "../interfaces/interface";
import { createUser } from "../service/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const redirect = () => {
    window.location.href = "http://localhost:1337/connect/google";
  };
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
    const newUser = await createUser(formData);
    // setItem('user',newUser?.data)
    console.log(newUser);
  };
  return (
    <form autoComplete="off" onSubmit={(e: FormEvent) => submitForm(e)}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          aria-describedby="username"
          onChange={(e: FormEvent<HTMLInputElement>) =>
            updateForm(e.currentTarget.value, "username")
          }
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e: FormEvent<HTMLInputElement>) =>
            updateForm(e.currentTarget.value, "email")
          }
        ></input>
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
      <div className="d-flex flex-column">
        <button type="submit" className="btn btn-primary mb-2">
          Register
        </button>
        <div className="btn btn-success mb-2" onClick={() => redirect()}>
          Google Login
        </div>
      </div>
      <div className="my-3">
      <Link to="/auth/signin">Already have an account</Link>
      </div>
    </form>
  );
};

export default Signup;
