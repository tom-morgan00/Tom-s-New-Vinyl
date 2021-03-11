import knex from 'knex';
import 'dotenv/config';

export default knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
});
