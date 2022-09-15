import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  // 무한스크롤?
  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

// nodemon crush 뜨길래 포트번호를 5000에서 8080으로 바꿔줌
app.listen(8080, () => console.log("API is working!"));
