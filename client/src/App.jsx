import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
    <>
      <form onSubmit={handleUpload}>
        <input type="file" id="file" name="file" onChange={handleChange} />
        <input type="text" id="title" name="title" required />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default App;
