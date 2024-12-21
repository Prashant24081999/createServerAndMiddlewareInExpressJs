const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // it should be in top

// app.use("/", (req, res, next) => {
//   console.log("This always run");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Add Product page</h1>");
// });

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><label for="title">Title: </label><input type="text" id="title" name="title"><label>Size: </label><input type="text" name="size"><button type="submit">Add Product</form>'
  );
});

// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

// const express = require("express");

// const app = express();

// app.use("/", (req, res, next) => {
//   console.log("middleware 1");
//   next();
// });

// app.use("/other-route", (req, res, next) => {
//   console.log("middleware 2");
//     res.send("<h1>This is other route</h1>");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>This is express</h1>");
// });

// app.listen(3000);
