const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { randomUUID } = require("crypto");
const fileUpload = require("express-fileupload");
const { moveFile } = require("./utils");
const Study = require("./models/study");
const port = process.env.PORT || 5000;

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

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

app.get("/api/get-study-material/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const studyMaterial = await Study.findOne({ id });
    res.status(200).send({
      message: "Study material",
      data: studyMaterial,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Could not get study material" });
  }
});

app.get("/api/all-study-materials", async (req, res) => {
  try {
    const allStudyMaterials = await Study.find({});
    res.status(200).send({
      message: "All study materials",
      data: allStudyMaterials,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Could not get study material" });
  }
});

app.post("/api/add-study-material", async (req, res) => {
  const attachment = req?.files?.file;
  const studyMaterial = req.body;
  if (attachment) {
    const newPath = moveFile(
      attachment,
      "public/uploads/" + attachment.tempFilePath.split("-").at(-1)
    );
    studyMaterial.attachment_url = newPath;
  }
  studyMaterial.id = randomUUID();
  try {
    const res = await Study.create(studyMaterial);
    console.log("Added study material", res);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Could not add study material" });
  }
  res.status(200).send({ message: "Study material added successfully" });
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
