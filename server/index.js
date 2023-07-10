const express = require("express");
const app = express();
const mongoose = require("mongoose");
const allStudyMaterials = require("./seeder");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ message: "Server is up!!" });
});

app.get("/api/all-study-materials", (req, res) => {
  res.send({
    message: "All study materials",
    data: allStudyMaterials,
  });
});

mongoose
  .connect(
    process.env.MONGO_URL || "mongodb://localhost:27017/study-materials",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
