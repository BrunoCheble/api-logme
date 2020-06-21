import { container } from 'tsyringe';

import ILogsRepository from '@modules/logs/repositories/ILogsRepository';
import LogsRepository from '@modules/logs/infra/typeorm/repositories/LogsRepository';

container.registerSingleton<ILogsRepository>('LogsRepository', LogsRepository);
