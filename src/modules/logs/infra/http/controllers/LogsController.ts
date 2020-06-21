import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLogService from '@modules/logs/services/CreateLogService';

export default class LogsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      application,
      type,
      created_by,
      description,
      details = {},
    } = request.body;
    const createAppointment = container.resolve(CreateLogService);

    const logs = await createAppointment.execute({
      application,
      created_by,
      type,
      description,
      details,
    });

    return response.json(logs);
  }
}
