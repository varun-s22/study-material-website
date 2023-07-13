import Header from "../components/Header";
import SearchIcon from "../components/SearchIcon";
import StudyCard from "../components/StudyCard";
import { useState, useEffect } from "react";
import { getStudyMaterials } from "../utils";
import "../styles/home.css";
import "../styles/study.css";

const Study = () => {
  const filters = {
    All: [],
    Subject: ["Maths", "Science", "English"],
    Grade: ["Grade X", "Grade XI", "Grade XII"],
    Category: ["Notes", "Past Papers", "Textbooks"],
  };
  const [currentFilter, setCurrentFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [studyMaterials, setStudyMaterials] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleFilter = (e) => {
    setCurrentFilter(e.target.value);
    setQuery("");
  };

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const getMaterial = async () => {
      if (currentFilter !== "All" && !query) return;
      const res = await getStudyMaterials({
        [currentFilter.toLowerCase()]: query,
      });
      setStudyMaterials(res);
    };
    getMaterial();
  }, [currentFilter, query]);

  return (
    <div className="study">
      <Header />
      <div className="study-content">
        <form className="search-study" onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Search for study material" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className="filter-parameters">
          <h2>Filter by: </h2>
          <select value={currentFilter} onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Subject">Subject</option>
            <option value="Grade">Grade</option>
            <option value="Category">Category</option>
          </select>
        </div>
        <div className="filter-parameters">
          {filters[currentFilter].map((filter) => (
            <button onClick={updateQuery} value={filter}>
              {filter}
            </button>
          ))}
        </div>
        <div className="study-materials">
          {studyMaterials.map((studyMaterial) => (
            <StudyCard studyMaterial={studyMaterial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
