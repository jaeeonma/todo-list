const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // 이름
  host: "localhost", // 주소
  database: "postgres", // db 이름
  password: "1234", // 비번
  port: 5432, //포트 번호
});

module.exports = pool;
