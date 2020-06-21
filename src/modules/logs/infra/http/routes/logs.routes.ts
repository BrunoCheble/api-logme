import { Router } from 'express';

import LogsController from '../controllers/LogsController';
import LogsApplicationDayController from '../controllers/LogsApplicationDayController';

const logsRouter = Router();
const logsController = new LogsController();
const logsApplicationDayController = new LogsApplicationDayController();

logsRouter.post('/', logsController.create);
logsRouter.get('/application/day', logsApplicationDayController.index);

export default logsRouter;
