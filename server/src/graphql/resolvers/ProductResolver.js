import knex from '../../db';

// Provide resolver functions for your schema fields
const ProductResolver = {
  Query: {
    getProducts: async () => {
      const products = await knex('product').select('*');

      return products;
    },
    getProductByID: async (_, { id }) => {
      const [product] = await knex('product').select('*').where({ id });

      return product;
    },
    getProductsByArtist: async (_, { artist }) => {
      const products = await knex('product').select('*').where({ artist });

      console.log(products);
      return products;
    },
    getRecommendedProducts: async () => {
      const products = await knex('product')
        .select('*')
        .where({ recommended: true });

      console.log(products);

      return products;
    },
  },
};

export default ProductResolver;
