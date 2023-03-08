const app = require("./src/app");
const { port } = require("./src/utils/config");

app.listen(port, () => {
   console.log(`listening on http://localhost:${port}`);
});
