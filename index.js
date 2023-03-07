const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const response = require("./response");
// const db = require("./connection");

app.use(bodyParser.json());

app.get("/", (req, res) => {
   response(200, "Hello World", res);
});

app.get("/pelajar", (req, res) => {
   response(200, "List pelajar", res);
});

app.get("/pelajar/:np", (req, res) => {
   response(200, `Pelajar dengan np ${req.params.np}`, res);
});

app.post("/pelajar", (req, res) => {
   response(200, "Created", res);
});

app.put("/pelajar/edit", (req, res) => {
   response(200, "Edited", res);
});

app.delete("/pelajar/delete", (req, res) => {
   response(200, "Deleted", res);
});

app.use((req, res) => {
   res.status(404);
   res.send(404);
});

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
