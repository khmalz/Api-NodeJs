const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
// const db = require("./connection");

app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.send("Hello World");
});

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
