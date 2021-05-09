import React, { FormEvent, useState } from "react";
import PropTypes from "prop-types";
import "./createBlog.css";
import { createBlog as createBlogInterace , blog } from "../interfaces/interface";
import { createBlog ,getBlogs} from "../service/blogList";

const CreateBlog = ({ handleClose, show }: createBlogInterace) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [formData, setFormData] = useState({
    title:null,
    content: null,
    featureImage:null,
  });

  /**
   * Function to update state for forms
   * @param value field value
   * @param field field name
   */
  const updateForm = (value: any, field: string) => {
    console.log(value);

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
        // @ts-ignore
    const data:blog = {title:formData?.title,content:formData.content} ;

    const payload = new FormData();
    if(formData.featureImage){
         // @ts-ignore
         payload.append(`files.featureImage`, formData.featureImage, formData.featureImage.name);
    }
    payload.append('data', JSON.stringify(data));
    await createBlog(payload);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main  p-5">
        <form
          className="d-flex flex-column"
          onSubmit={(e: FormEvent) => submitForm(e)}
        >
          <input
            type="text"
            name="title"
            id=""
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "title")
            }
          />
          <input
            type="text"
            name="content"
            id=""
            onChange={(e: FormEvent<HTMLInputElement>) =>
              updateForm(e.currentTarget.value, "content")
            }
          />
          <input
            type="file"
            name="featureImage"
            id=""
            onChange={(e: FormEvent<any>) =>
              updateForm(e.currentTarget.files[0], "featureImage")
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </form>
      </section>
    </div>
  );
};
CreateBlog.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default CreateBlog;
