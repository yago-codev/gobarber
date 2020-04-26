import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ mensagem: 'rota principal' }));

export default routes;
