import { injectable, inject } from 'tsyringe';

import Log from '../infra/typeorm/schemas/Log';
import ILogsRepository from '../repositories/ILogsRepository';

interface IDetails {
  [index: string]: any;
}
interface IRequest {
  application: string;
  description: string;
  type: string;
  created_by: string;
  details?: IDetails;
}

@injectable()
class CreateLogService {
  constructor(
    @inject('LogsRepository')
    private logsRepository: ILogsRepository,
  ) {}

  public async execute({
    application,
    description,
    type,
    created_by,
    details,
  }: IRequest): Promise<Log | undefined> {
    const log = await this.logsRepository.create({
      application,
      description,
      type,
      created_by,
      details,
    });

    return log;
  }
}

export default CreateLogService;
