import { injectable, inject } from 'tsyringe';

import Log from '@modules/logs/infra/typeorm/schemas/Log';

import ILogsRepository from '@modules/logs/repositories/ILogsRepository';

interface IRequest {
  application: string;
  date: Date;
}

@injectable()
class ListLogApplicationDayService {
  constructor(
    @inject('LogsRepository')
    private logsRepository: ILogsRepository,
  ) {}

  public async execute({
    application,
    date,
  }: IRequest): Promise<Log[] | undefined> {
    const start_date = new Date(date);
    const end_date = new Date(date);
    end_date.setDate(start_date.getDate() + 1);

    const logs = await this.logsRepository.findAllBetweenDatesFromApplication({
      application,
      start_date,
      end_date,
    });
    return logs;
  }
}

export default ListLogApplicationDayService;
