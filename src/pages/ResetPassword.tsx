import React, { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { resetPassword } from "../service/auth";

const ResetPassword = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    code: "",
    passwordConfirmation: "",
    password: "",
  });
  const [code, setCode] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      let query = getQuery();
      const code = await query.get("code");
      setCode(String(code));
    }
    fetchBlogs();
  }, []);
  const getQuery = () => {
    return new URLSearchParams(location.search);
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
    const payload = {...formData,code}
    const newPassword = await resetPassword(payload);
    console.log(newPassword);
  };
  return (
    <div>
      <form onSubmit={(e: FormEvent) => submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="text"
            name="newPassword"
            className="form-control"
            id="newPassword"
            aria-describedby="newPassword"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "password")
            }
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="newpasswordConfirmation" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            name="newpasswordConfirmation"
            className="form-control"
            id="newpasswordConfirmation"
            aria-describedby="newpasswordConfirmation"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "passwordConfirmation")
            }
          ></input>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
