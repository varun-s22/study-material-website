const getStudyMaterials = async (query) => {
  if ("all" in query) delete query.all;
  try {
    const response = await fetch(
      "http://localhost:5000/api/get-study-material?" +
        new URLSearchParams(query)
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const addStudyMaterial = async (studyMaterial) => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/add-study-material",
      {
        method: "POST",
        body: studyMaterial,
      }
    );
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.log(error);
  }
};

export { getStudyMaterials, addStudyMaterial };
