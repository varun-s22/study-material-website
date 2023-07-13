import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <img src="/homepageArt.webp" alt="logo" className="logo" />
        <div className="content">
          <h1>Learn from the best resources</h1>
          <h2 className="">
            Feel empowered to contribute and share your own valuable resources,
            fostering a vibrant community of learners.
          </h2>
          <button>
            <Link to="/study">Lets get Started!!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
