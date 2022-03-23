const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "vita_db",
  user: "postgres",
  password: "senai",
  port: 5432,
});

