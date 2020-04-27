import { Router } from 'express';

import appointmentsRouter from './appoinments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
