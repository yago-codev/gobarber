import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ mensagem: 'rota principal' }));

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
