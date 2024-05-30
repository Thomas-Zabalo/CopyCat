//La génération d'éléments n'est pas parfaite en effet la traduction laisse à désirer
const { faker } = require('@faker-js/faker/locale/fr');
const connection = require('../database');

function createProduct() {
    const products = [];
    for (let i = 1; i < 21; i++) {
        products.push({
            id: i,
            image: faker.image.avatar,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            category: 'Sport'
        });
    }
    return products;
}

function createProducts(count = 1) {
    let allProducts = [];
    for (let i = 0; i < count; i++) {
        allProducts = allProducts.concat(createProduct());
    }
    return allProducts;
}

function insertProduct(product, callback) {
    console.log('Inserting product:', product);
    const query = 'INSERT INTO produit (id, image, name, price, description, category) VALUES (?, null, ?, ?, ?, ?)';
    const params = [product.id, product.name, product.price, product.description, product.category];

    connection.query(query, params, (error, results) => {
        if (error) {
            console.error('Error inserting product:', error);
            return callback(error);
        }
        console.log('Product inserted successfully:', results);
        callback(null, results);
    });
}

// Exemple d'utilisation pour tester l'insertion de produits
const products = createProducts(1); // Ceci créera 20 produits

products.forEach(product => {
    insertProduct(product, (error, results) => {
        if (error) {
            console.error('Failed to insert product:', error);
        } else {
            console.log('Insert result:', results);
        }
    });
});

module.exports = {
    createProduct,
    createProducts,
    insertProduct,
};
