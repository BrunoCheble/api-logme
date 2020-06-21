import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListLogApplicationDayService from '@modules/logs/services/ListLogApplicationDayService';

export default class LogsApplicationDayController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { application, date } = request.body;
    const listLogsApplicationDay = container.resolve(
      ListLogApplicationDayService,
    );

    const logs = await listLogsApplicationDay.execute({
      application,
      date,
    });

    return response.json(logs);
  }
}
