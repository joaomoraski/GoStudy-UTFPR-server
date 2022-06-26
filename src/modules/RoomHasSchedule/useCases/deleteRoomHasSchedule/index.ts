import { DeleteRoomHasScheduleUseCase } from './DeleteRoomHasScheduleUseCase';
import { DeleteRoomHasScheduleController} from './DeleteRoomHasScheduleController';
import { RoomHasScheduleRepository } from '../../implementations/RoomHasScheduleRepository';

const roomhasScheduleRepository = new RoomHasScheduleRepository();
const deleteRoomHasScheduleUseCase = new DeleteRoomHasScheduleUseCase(
    roomhasScheduleRepository
);

const deleteRoomHasScheduleController = new DeleteRoomHasScheduleController(
    deleteRoomHasScheduleUseCase
);

export { deleteRoomHasScheduleUseCase, deleteRoomHasScheduleController };