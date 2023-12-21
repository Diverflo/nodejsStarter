// import des packages necessaires
require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// afficher 'hello World'
app.get("/", (req, res) => {
  res.send("Hello World !");
});

// lancement du serveur
const PORT = process.env.PORT || 5600;

// definir une fonction pour lancer le serveur
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
