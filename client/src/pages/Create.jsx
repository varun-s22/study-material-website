import Header from "../components/Header";
import "../styles/home.css";
import "../styles/create.css";
import { useState } from "react";

const Create = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", e.target.title.value);
    await fetch("http://localhost:5000/api/add-study-material", {
      method: "POST",
      body: formData,
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
              <label htmlFor="title">Title*</label>
              <input type="text" id="title" name="title" required />
            </span>
            <span>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" required />
            </span>
          </div>
          <div className="form-section">
            <span>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </span>
            <span>
              <label htmlFor="grade">Grade</label>
              <input type="text" id="grade" name="grade" />
            </span>
            <span>
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category" required />
            </span>
          </div>
          <div className="form-end">
            <span>
              <label htmlFor="file">File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
              />
            </span>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
