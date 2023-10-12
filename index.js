const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabnur", email: "sabnur@gmail.com" },
  { id: 3, name: "sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post hitting");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
