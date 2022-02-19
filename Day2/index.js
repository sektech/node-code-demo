const fs = require("fs");
const superagent = require("superagent");
fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log("Error" + err);
  }
  console.log(data);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("dogoutput.txt", res.body.message, (err) => {
        console.log("File saved");
      });
    })
    .catch((err) => console.log("file not found"));
});
