const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes/api");
const response = require("./utils/response");
const { notFound } = require("./utils/middleware");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
   response(200, "Success", "API Node Js", res);
});

app.use("/api", api);

app.use(notFound);

module.exports = app;
