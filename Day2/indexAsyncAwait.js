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
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("file not found");
      resolve("Successfully written file");
    });
  });
};

const asyncAwait = async () => {
  const data = await fileReadPro(`${__dirname}/dog.txt`);
  const result = await superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  await writeFilePro("dataoutput.txt", result.body.message);
  console.log("file saved ");
  return "2 returned from function";
};

console.log("1.before async");
asyncAwait().then((x) => {
  console.log(x);
  console.log("3.after async");
});
