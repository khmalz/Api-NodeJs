const { host, username, password, database } = require("./config");
const mysql = require("mysql");

const db = mysql.createConnection({
   host,
   user: username,
   password,
   database,
});

module.exports = db;
