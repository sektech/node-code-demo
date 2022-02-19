const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const PORT = 3000;
const inputFile = `${__dirname}/data/app-dev-data.json`;

const tours = JSON.parse(fs.readFileSync(inputFile));
/*
app.get("/", (req, resp) => {
  resp
    .status(200)
    .json({ message: "hello world from json server", author: "sekar" });
  //.send("hello from server side API");
});

app.post("/", (req, resp) => {
  resp.send("accept post message");
});*/

app.get("/api/v1/tours", (req, resp) => {
  resp.status(200).json({
    status: "Success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, resp) => {
  //console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newRecord = Object.assign(
    {
      id: newId,
    },
    req.body
  );
  tours.push(newRecord);
  fs.writeFile(inputFile, JSON.stringify(tours), () => {
    console.log("file written successfuly");
    resp.status(201).send("Record created");
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}...`);
});
