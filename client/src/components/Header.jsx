import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-link">
        <h1>My Study</h1>
      </Link>
      <span className="header-links">
        <Link to="/study" className="header-link">
          <h2>Join</h2>
        </Link>
        <Link to="/create" className="header-link">
          <h2>Create</h2>
        </Link>
      </span>
    </div>
  );
};

export default Header;
