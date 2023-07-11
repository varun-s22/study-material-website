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
    console.log("clicked");
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    const response = await res.json();
    console.log(response);
  };

  return (
    <>
      <form onSubmit={handleUpload}>
        <input type="file" id="file" name="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default App;
