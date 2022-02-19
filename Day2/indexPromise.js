const fs = require("fs");
const superagent = require("superagent");

const fileReadPro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("file not found");
      resolve(data);
    });
  });
};
const writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("file not found");
      resolve("Successfully written file");
    });
  });
};

fileReadPro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(data);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    return writeFile("dogoutput.txt", res.body.message);
  })
  .then(() => console.log("random image saved"))
  .catch((err) => console.log("file not found"));
