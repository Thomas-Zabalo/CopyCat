'use strict';
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Crée une application
const app = express();
const PORT = process.env.PORT || 80;

// Middleware CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Connexion avec la bd
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ""
});

// Connexion avec MySQL 
connection.connect(error => {
    if (error) {
        console.log("Une erreur est survenue lors de la connexion avec la base de donnée.");
        throw error;
    }

    // Si tout va bien on lance le serveur express
    app.listen(PORT, () => {
        console.log(`Serveur démarré : http://localhost:${PORT}`);
    });
});

// Route pour récupérer les produits depuis la base de données
app.get("/api/produit", (req, res) => {
    const query = 'SELECT * FROM produit';

    connection.query(query, (error, results) => {
        if (error) {
            console.log("Erreur lors de l'exécution de la requête SQL:", error);
            res.status(500).send("Erreur lors de l'exécution de la requête SQL.");
            return;
        }
        res.json(results);
    });
});

app.get("/api/produit/:id", (req, res) => {
    const productId = req.params.id;
    console.log(productId)

    const query = `SELECT * FROM produit WHERE id = ${productId}`;

    connection.query(query, [productId], (error, results) => {
        if (error) {
            console.error("Erreur lors de l'exécution de la requête SQL:", error);
            res.status(500).send("Erreur lors de l'exécution de la requête SQL.");
            return;
        }
        if (results.length === 0) {
            res.status(404).send("Produit non trouvé.");
            return;
        }
        res.json(results[0]);
    });
});
