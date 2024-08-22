const { listProducts } = require('../models/product');
//  logical same service -> daos
const getProducts = () => {
  return listProducts;
};
const getProductByID = (args) => {
  console.log({ args });
  return listProducts.find((e) => e.id == args.id);
};

const createProduct = (args) => {
  console.log({
    args,
  });
  listProducts.push({
    id: args.id,
    name: args.name,
    price: args.price,
    description: args.description,
  });
  return listProducts.find((e) => e.id == args.id);
};

module.exports = {
  getProductByID,
  getProducts,
  createProduct,
};
