import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({
    email: "megamindtheincredible@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Knowledge-JO/HNG-stage-0-task-01",
  });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
