import { getMongoRepository, MongoRepository } from 'typeorm';
import ILogsRepository from '@modules/logs/repositories/ILogsRepository';
import ICreateLogDTO from '@modules/logs/dtos/ICreateLogDTO';
import IFindAllBetweenDatesFromApplicationDTO from '@modules/logs/dtos/IFindAllBetweenDatesFromApplicationDTO';
import Log from '../schemas/Log';

class LogsRepository implements ILogsRepository {
  private ormRepository: MongoRepository<Log>;

  constructor() {
    this.ormRepository = getMongoRepository(Log, 'default');
  }

  public async findAllBetweenDatesFromApplication({
    application,
    start_date,
    end_date,
  }: IFindAllBetweenDatesFromApplicationDTO): Promise<Log[] | undefined> {
    const logsFound = await this.ormRepository.find({
      where: {
        application,
        created_at: {
          $gte: start_date,
          $lt: end_date,
        },
      },
    });
    return logsFound;
  }

  public async create({
    application,
    description,
    type,
    created_by,
    details,
  }: ICreateLogDTO): Promise<Log> {
    const log = this.ormRepository.create({
      application,
      description,
      type,
      created_by,
      details,
    });
    await this.ormRepository.save(log);
    return log;
  }
}

export default LogsRepository;
