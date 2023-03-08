const dotenv = require("dotenv");
dotenv.config();

module.exports = {
   port: process.env.PORT || 3000,
   host: process.env.DB_HOST || "localhost",
   username: process.env.DB_USERNAME || "root",
   password: process.env.DB_PASSWORD || "",
   database: process.env.DB_DATABASE || "nodejs",
};
