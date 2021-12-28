const { response } = require("express");
const express = require("express");

const app = express();
app.listen(8000, () => {
  console.log("server completed 8000 post open.");
});

app.all("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  setTimeout(() => {
    response.send("hello? AJAX this is all.");
  }, 2000);
});

//jquery server
app.all("/jquery", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "LiuYan",
    word: "Xiaoazhai3344",
  };
  setTimeout(function () {
    response.send(JSON.stringify(data));
  }, 1000);
});

//axios server
app.all("/axios-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "LiuYan",
    password: "123456",
  };

  response.send(JSON.stringify(data));
});
