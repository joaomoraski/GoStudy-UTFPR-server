import { BrowseRoomHasScheduleUseCase } from './BrowseRoomHasScheduleUseCase';
import { BrowseRoomHasScheduleController} from './BrowseRoomHasScheduleController';
import { RoomHasScheduleRepository } from '../../implementations/RoomHasScheduleRepository';

const roomHasScheduleRepository = new RoomHasScheduleRepository();
const browseRoomHasScheduleUseCase = new BrowseRoomHasScheduleUseCase(
    roomHasScheduleRepository
);

const browseRoomHasScheduleController = new BrowseRoomHasScheduleController(
    browseRoomHasScheduleUseCase
);

export { browseRoomHasScheduleUseCase, browseRoomHasScheduleController };