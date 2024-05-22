class ProduitController {
    constructor() {
        // Initialisation spécifique du ProductController
    }

    getAllProducts(req, res) {
        const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
        res.json(products);
    }

    // D'autres méthodes de contrôleur pour les produits
}

module.exports = ProduitController;
