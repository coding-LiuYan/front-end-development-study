const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  // 跨域问题
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 非预设请求头（非法命名请求头如何获取）
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("hello? express");
});

app.listen(8000, () => {
  console.log("server completed 8000 post open.");
});
