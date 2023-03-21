console.clear();
require("dotenv").config();
const express = require("express");
const sequelize = require("./models/database"); // database
const { Op } = require("sequelize");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({
  code: 0,
  message: "Welcome to our RESTful web service, v2.2"
}));

app.get("/contact", (req, res) => res.json({
  code: 0,
  message: "+84.822.101.123"
}));

app.use((req, res) =>
  res.json({ code: 1, message: "Your request path or method is not supported" })
);

(async () => {
  const port = process.env.PORT || 8080;
  app.listen(port, () =>
    console.log(`server is running at http://localhost:${port}`)
  );
})();
