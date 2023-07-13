import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study" element={<Study />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
