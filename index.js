const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const response = require("./response");
const db = require("./connection");

app.use(bodyParser.json());

app.get("/", (req, res) => {
   response(200, "Success", "API Node Js", res);
});

app.get("/pelajar", (req, res) => {
   const sql = "SELECT * FROM pelajar";
   db.query(sql, (err, fields) => {
      if (err) throw err;

      response(200, "Success", fields, res);
   });
});

app.get("/pelajar/:np", (req, res) => {
   const sql = `SELECT * FROM pelajar WHERE np = ${req.params.np}`;
   db.query(sql, (err, field) => {
      if (err) throw err;

      response(200, "Success", field, res);
   });
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
   res.sendStatus(404);
});

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
