import { CreateScheduleUseCase } from './CreateScheduleUseCase';
import { CreateScheduleController} from './CreateScheduleController';
import { ScheduleRepository } from '../../implementations/ScheduleRepository';

const scheduleRepository = new ScheduleRepository();
const createScheduleUseCase = new CreateScheduleUseCase(
    scheduleRepository
);

const createScheduleController = new CreateScheduleController(
    createScheduleUseCase
);

export { createScheduleUseCase, createScheduleController };