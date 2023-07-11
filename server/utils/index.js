const fs = require("fs");

const moveFile = (file, path) => {
  fs.rename(file.tempFilePath, path, (err) => {
    if (err) {
      console.log(err);
    }
  });
  return path;
};

module.exports = { moveFile };
