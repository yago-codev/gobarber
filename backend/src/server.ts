import 'reflect-metadata';

import express from 'express';

import routes from './routes';
import './database';

const app = express();

app.use(express.json()); // configurando o express para entender o formato JSON enviado pelas requisições
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
