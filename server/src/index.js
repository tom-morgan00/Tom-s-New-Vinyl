import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}/graphql`)
);
