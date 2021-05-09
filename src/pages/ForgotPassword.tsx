import React, { FormEvent, useState } from "react";
import { sendForgotPasswordMail } from "../service/auth";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  /**
   * Function to submit Form
   * @param event mouse click event
   */
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    const res = await sendForgotPasswordMail(email);
    console.log(res);

  };
  return (
    <div>
      <form onSubmit={(e: FormEvent) => submitForm(e)}>
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
              setEmail(e.currentTarget.value)
            }
          ></input>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Reset Password Mail
        </button>
      </form>
    </div>
  );
};
