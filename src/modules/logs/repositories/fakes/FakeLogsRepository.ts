import { uuid } from 'uuidv4';

import ILogsRepository from '@modules/logs/repositories/ILogsRepository';
import ICreateLogDTO from '@modules/logs/dtos/ICreateLogDTO';
import IFindAllBetweenDatesFromApplicationDTO from '@modules/logs/dtos/IFindAllBetweenDatesFromApplicationDTO';
import Log from '../../infra/typeorm/schemas/Log';

class LogsRepository implements ILogsRepository {
  private logs: Log[] = [];

  public async findAllBetweenDatesFromApplication({
    application,
    start_date,
    end_date,
  }: IFindAllBetweenDatesFromApplicationDTO): Promise<Log[] | undefined> {
    const logsFound = await this.logs.filter(
      (log) =>
        application === log.application &&
        start_date.getTime() >= log.created_at.getTime() &&
        end_date.getTime() <= log.created_at.getTime(),
    );
    return logsFound;
  }

  public async create({
    application,
    description,
    type,
    created_by,
  }: ICreateLogDTO): Promise<Log> {
    const log = new Log();

    Object.assign(log, {
      id: uuid(),
      application,
      description,
      created_by,
      type,
    });

    this.logs.push(log);

    return log;
  }
}

export default LogsRepository;
