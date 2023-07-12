import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(1337, () => {
    console.log("Listening on port 1337");
})