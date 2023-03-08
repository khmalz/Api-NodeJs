const express = require("express");
const bodyParser = require("body-parser");

const pelajarRoutes = require("./routes/pelajar");
const response = require("./response");

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
   response(200, "Success", "API Node Js", res);
});

app.use("/pelajar", pelajarRoutes);

app.use((req, res) => {
   res.sendStatus(404);
});

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
