import { BrowseScheduleUseCase } from './BrowseScheduleUseCase';
import { BrowseScheduleController} from './BrowseScheduleController';
import { ScheduleRepository } from '../../implementations/ScheduleRepository';

const scheduleRepository = new ScheduleRepository();
const browseScheduleUseCase = new BrowseScheduleUseCase(
    scheduleRepository
);

const browseScheduleController = new BrowseScheduleController(
    browseScheduleUseCase
);

export { browseScheduleUseCase, browseScheduleController };