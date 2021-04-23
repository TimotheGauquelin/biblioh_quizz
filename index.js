//Chargement des modules

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Chargement des routes

const server = express();
server.use(express.json());
server.use(cors());

server.listen(5500, () => {

    console.log("Ce serveur est écoutable sur le port 5500. :)");

    mongoose.connect("mongodb://localhost:27017/biblioh", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.once("open", () => console.log("Connexion au serveur reussie ! Vous pouvez accéder à Biblioh Quiz."))

});

server.get("/", (req, res, err) => {

    res.send({
        result: "Bienvenue sur la base de données de Biblioh Quizz"
    });

})

// routes(server)


