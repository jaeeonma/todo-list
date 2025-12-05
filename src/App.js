import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/data").then((res) => {
        console.log(res);
      });
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TO DO LIST</h1>
        <p>{datas}</p>

        <div className="login">
          <div className="input">
            <label>아이디</label>
            <input type="text" placeholder="아이디를 입력하세요" />
          </div>

          <div className="input">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>

          <button className="login-btn">로그인</button>

          <button className="signup-btn">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default App;
