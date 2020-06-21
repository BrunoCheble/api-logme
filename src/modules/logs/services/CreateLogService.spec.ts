import 'reflect-metadata';
// import AppError from '@shared/errors/AppError';
import CreateLogService from './CreateLogService';
import FakeLogsRepository from '../repositories/fakes/FakeLogsRepository';

let fakeLogsRepository: FakeLogsRepository;
let createLog: CreateLogService;

describe('CreateLog', () => {
  beforeEach(() => {
    fakeLogsRepository = new FakeLogsRepository();
    createLog = new CreateLogService(fakeLogsRepository);
  });
  it('should be able to create a new log', async () => {
    const data = {
      application: 'Test',
      description: 'Log successfully registered',
      type: 'success',
      created_by: 'someuser',
      details: {
        message: 'Executed by test!',
      },
    };
    const log = await createLog.execute(data);
    expect(log).toHaveProperty('id');
  });
});
