import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use(
	'/graphql',
	graphqlHTTP(() => ({
		schema,
		graphiql: true,
		pretty: true
	}))
);
