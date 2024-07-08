const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "shivani",
    },
    {
      id: 2,
      name: "nik",
    },
    {
      id: 3,
      name: "nano",
    },
    {
      id: 4,
      name: "sharu",
    },
    {
      id:5,
    name: "tommy"
    },
    {
      id:6,
      name:"chaman"
    },
    {
      id:7,
    name:"laila vaish"
    },
    {
      id:8,
      name: "ritu"
    },
    {
      id:9,
      name: "iron-man"
    },
    {
      id:10,
      name: "itachi"
    }
  ]);
});
const port = 5000;
app.listen(port, ()=>{
console.log(`app is running on port:${port}`)
})