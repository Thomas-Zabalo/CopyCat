const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql-zabalo.alwaysdata.net',
    user: 'zabalo',
    password: 'Voiture82',
    database: "zabalo_copycat"
});

connection.connect(error => {
    if (error) {
        console.error("Une erreur est survenue lors de la connexion avec la base de donnée:", error);
        throw error;
    }
    console.log('Connexion à la base de données réussie');
});

module.exports = connection;
