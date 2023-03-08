const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pelajarRoutes = require("./routes/pelajar");
const response = require("./utils/response");
const { port } = require("./utils/config");
const { notFound } = require("./utils/middleware");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
   response(200, "Success", "API Node Js", res);
});

app.use("/pelajar", pelajarRoutes);

app.use(notFound);

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
