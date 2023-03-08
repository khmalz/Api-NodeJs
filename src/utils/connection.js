const mysql = require("mysql");
const { host, username, password, database } = require("./config");

const db = mysql.createConnection({
   host,
   user: username,
   password,
   database,
});

module.exports = db;
