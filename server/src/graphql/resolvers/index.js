import { dateScalar } from '../typeDefs';
import ProductResolver from './ProductResolver';

export default {
  Date: dateScalar,
  Query: {
    ...ProductResolver.Query,
  },
};
