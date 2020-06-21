import ICreateLogDTO from '../dtos/ICreateLogDTO';
import IFindAllBetweenDatesFromApplicationDTO from '../dtos/IFindAllBetweenDatesFromApplicationDTO';
import Log from '../infra/typeorm/schemas/Log';

export default interface ILogsRepository {
  create(data: ICreateLogDTO): Promise<Log | undefined>;
  findAllBetweenDatesFromApplication(
    data: IFindAllBetweenDatesFromApplicationDTO,
  ): Promise<Log[] | undefined>;
}
