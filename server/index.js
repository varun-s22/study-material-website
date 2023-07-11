const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const allStudyMaterials = require("./seeder");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.static("public"));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "tmp/",
    limits: { fileSize: 500 * 1024 * 1024 * 1024 },
    abortOnLimit: true,
  })
);

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Server is up!!" });
});

app.get("/api/all-study-materials", (req, res) => {
  res.send({
    message: "All study materials",
    data: allStudyMaterials,
  });
});

app.post("/api/add-study-material", (req, res) => {
  console.log(req.body);
  res.send({
    message: "Add study material",
  });
});

app.post("/upload", (req, res) => {
  console.log(req.files);
  res.send({
    message: "File uploaded",
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
