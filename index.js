const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const response = require("./response");
// const db = require("./connection");

app.use(bodyParser.json());

app.get("/", (req, res) => {
   response(200, "Success", "Hello World", res);
});

app.get("/pelajar", (req, res) => {
   response(200, "Success", "List pelajar", res);
});

app.get("/pelajar/:np", (req, res) => {
   response(200, "Success", `Pelajar dengan np ${req.params.np}`, res);
});

app.post("/pelajar", (req, res) => {
   response(200, "Success", "Created", res);
});

app.put("/pelajar/edit", (req, res) => {
   response(200, "Success", "Edited", res);
});

app.delete("/pelajar/delete", (req, res) => {
   response(200, "Success", "Deleted", res);
});

app.use((req, res) => {
   res.status(404);
   res.send(404);
});

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
