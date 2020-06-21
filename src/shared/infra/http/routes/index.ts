import { Router } from 'express';

import logsRouter from '@modules/logs/infra/http/routes/logs.routes';

const routes = Router();

routes.use('/', logsRouter);

export default routes;
