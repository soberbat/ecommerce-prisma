const { PrismaClient } = require("@prisma/client");
var express = require("express");

const prisma = new PrismaClient();
var app = express();
app.get("/", async function (req, res) {
  const user = await prisma.user.create({
    data: {
      name: "bebebe",
      email: "kdjdkdkdkdk@prisma.io",
    },
  });

  const users = await prisma.user.findMany();
  console.log(users);
  res.send("Hello World!");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
