import express from "express";

const app = express();
const port = 3005;



app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/register", (req, res) => {
  res.send("Reg request!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})