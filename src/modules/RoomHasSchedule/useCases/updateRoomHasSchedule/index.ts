/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateRoomHasScheduleUseCase } from './UpdateRoomHasScheduleUseCase';
import { UpdateRoomHasScheduleController} from './UpdateRoomHasScheduleController';
import { RoomHasScheduleRepository } from '../../implementations/RoomHasScheduleRepository';

const roomhasScheduleRepository = new RoomHasScheduleRepository();
const updateRoomHasScheduleUseCase = new UpdateRoomHasScheduleUseCase(
    roomhasScheduleRepository
);

const updateRoomHasScheduleController = new UpdateRoomHasScheduleController(
    updateRoomHasScheduleUseCase
);

export { updateRoomHasScheduleUseCase, updateRoomHasScheduleController };