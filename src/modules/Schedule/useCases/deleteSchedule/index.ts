import { DeleteScheduleUseCase } from './DeleteScheduleUseCase';
import { DeleteScheduleController} from './DeleteScheduleController';
import { ScheduleRepository } from '../../implementations/ScheduleRepository';

const scheduleRepository = new ScheduleRepository();
const deleteScheduleUseCase = new DeleteScheduleUseCase(
    scheduleRepository
);

const deleteScheduleController = new DeleteScheduleController(
    deleteScheduleUseCase
);

export { deleteScheduleUseCase, deleteScheduleController };