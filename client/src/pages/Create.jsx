import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import { addStudyMaterial } from "../utils";

import "react-toastify/dist/ReactToastify.css";
import "../styles/home.css";
import "../styles/create.css";

const Create = () => {
  const [file, setFile] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const subjectRef = useRef(null);
  const gradeRef = useRef(null);
  const categoryRef = useRef(null);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", e.target.title.value);
    formData.append("description", e.target?.description.value);
    formData.append("subject", e.target?.subject.value);
    formData.append("grade", e.target?.grade.value);
    formData.append("category", e.target?.category.value);

    const res = await addStudyMaterial(formData);

    setFile(null);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    subjectRef.current.value = "";
    gradeRef.current.value = "";
    categoryRef.current.value = "";
    fileRef.current.value = "";

    toast.success(res, {
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  return (
    <div className="create">
      <Header />
      <h1 className="heading">Create a new study material</h1>
      <div className="create-content">
        <form className="create-form" onSubmit={handleUpload}>
          <div className="form-section">
            <span>
              <label htmlFor="title">Title*: </label>
              <input
                type="text"
                id="title"
                name="title"
                ref={titleRef}
                required
              />
            </span>
            <span>
              <label htmlFor="description">Description: </label>
              <textarea
                id="description"
                name="description"
                ref={descriptionRef}
              />
            </span>
          </div>
          <div className="form-section">
            <span>
              <label htmlFor="subject">Subject: </label>
              <input type="text" id="subject" name="subject" ref={subjectRef} />
            </span>
            <span>
              <label htmlFor="grade">Grade: </label>
              <input type="text" id="grade" name="grade" ref={gradeRef} />
            </span>
            <span>
              <label htmlFor="category">Category: </label>
              <input
                type="text"
                id="category"
                name="category"
                ref={categoryRef}
              />
            </span>
          </div>
          <div className="form-end">
            <span>
              <label htmlFor="file">File: </label>
              <input
                type="file"
                id="file"
                name="file"
                ref={fileRef}
                onChange={handleChange}
              />
            </span>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Create;
