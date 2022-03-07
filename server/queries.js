

const axios = require("axios")

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "vita_db",
  user: "postgres",
  password: "senai",
  port: 5432,
});

const api = axios.create({
  baseURL: `http://10.3.62.62:3000/`
})

console.log(api);

module.exports = [api, pool];

// import qs from 'qs';
// const data = { 'bar': 123 };
// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };
// axios(options);