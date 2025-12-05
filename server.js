const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const pool = require("./db/db.js");
app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    const response = await pool.query(
      // async 비동기 함수, await DB 결과를 기다림
      "select * from account" //모든 테이블 가져오기
    );
    res.status(200).json(response.rows[0]); //다른건 필요 없기 때문에 배열만 추출
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "데이터 조회 실패" });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(" DB 연결 실패:", err.message);
  } else {
    console.log(" DB 연결 성공!", res.rows[0].now);
  }
});
