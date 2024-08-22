const {
  getProducts,
  getProductByID,
  createProduct,
} = require('../../daos/product.dao');

module.exports = {
  Query: {
    products: (root, args, context, info) => getProducts(),
    product: (root, args, context, info) => getProductByID(args.id),
  },
  Mutation: {
    createProduct: (root, args, context, info) => createProduct(args),
  },
};
