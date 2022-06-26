import { ShowScheduleUseCase } from './ShowScheduleUseCase';
import { ShowScheduleController} from './ShowScheduleController';
import { ScheduleRepository } from '../../implementations/ScheduleRepository';

const scheduleRepository = new ScheduleRepository();
const showScheduleUseCase = new ShowScheduleUseCase(
    scheduleRepository
);

const showScheduleController = new ShowScheduleController(
    showScheduleUseCase
);

export { showScheduleUseCase, showScheduleController };