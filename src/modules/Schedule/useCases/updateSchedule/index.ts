import { UpdateScheduleUseCase } from './UpdateScheduleUseCase';
import { UpdateScheduleController} from './UpdateScheduleController';
import { ScheduleRepository } from '../../implementations/ScheduleRepository';

const scheduleRepository = new ScheduleRepository();
const updateScheduleUseCase = new UpdateScheduleUseCase(
    scheduleRepository
);

const updateScheduleController = new UpdateScheduleController(
    updateScheduleUseCase
);

export { updateScheduleUseCase, updateScheduleController };