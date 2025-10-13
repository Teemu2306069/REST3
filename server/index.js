//toteuta datan haku,lisäys, poisto ja päivitys mariadb-tietokantaan
/* Tietokannassa oltava:

    Nimet (etunimi, sukunimi, kutsumanimi),
    Syntymävuosi (Date)
    Paino (number)
    www-linkki kuvaan,
    Laji
    Saavutukset
*/
require("dotenv").config();

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.use("/urheilijat", require("./routes/urheilijaRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening to port: " + PORT);
});
