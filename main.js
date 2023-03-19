console.clear();
require("dotenv").config();
const express = require("express");
const sequelize = require("./models/database"); // database
const { Op } = require("sequelize");
const app = express();

app.use(express.json());

const Account = require("./models/Account")(sequelize);
const Product = require("./models/Product")(sequelize);

app.get("/", (req, res) => res.send("Welcome to our RESTful web service"));

app.get("/products", async (req, res) => {
  let products = await Product.findAll();
  res.json({ code: 0, products });
});

app.post("/products", async (req, res) => {
  let p = await Product.create(req.body);
  res.json({ code: 0, product: p });
});

app.post("/account/register", async (req, res) => {
  let acc = await Account.create(req.body);
  res.json({ code: 0, account: acc });
});

app.post("/account/login", async (req, res) => {
  const { email, password } = req.body;
  let acc = await Account.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
  });
  if (acc) res.json({ code: 0, message: "Login success", account: acc });
  else res.json({ code: 1, message: "Login failed" });
});

app.use((req, res) =>
  res.json({ code: 1, message: "Your request path or method is not supported" })
);

(async () => {
  const port = process.env.PORT || 8080;
  console.log("connecting to the database server");
  await sequelize.authenticate(); // connect database
  await sequelize.sync({ force: false }); // create tables
  app.listen(port, () =>
    console.log(`server is running at http://localhost:${port}`)
  );
})();
