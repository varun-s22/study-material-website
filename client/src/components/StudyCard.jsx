import "../styles/study.css";

const StudyCard = (props) => {
  const study = props.studyMaterial;
  return (
    <div className="study-material">
      <h2 className="study-material-title">{study.title}</h2>
      <p className="study-material-description">{study.description}</p>
      <div className="study-material-info">
        <span className="study-material-subject">{study.subject}</span>
        <span className="study-material-grade">{study.grade}</span>
        <span className="study-material-category">{study.category}</span>
      </div>
      <div className="study-material-download">
        <a
          href={
            study.attachment_url
              ? "http://localhost:5000/" + study.attachment_url
              : "#"
          }
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default StudyCard;
