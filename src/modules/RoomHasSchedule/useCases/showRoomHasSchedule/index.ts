/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ShowRoomHasScheduleUseCase } from './ShowRoomHasScheduleUseCase';
import { ShowRoomHasScheduleController} from './ShowRoomHasScheduleController';
import { RoomHasScheduleRepository } from '../../implementations/RoomHasScheduleRepository';

const roomhasScheduleRepository = new RoomHasScheduleRepository();
const showRoomHasScheduleUseCase = new ShowRoomHasScheduleUseCase(
    roomhasScheduleRepository
);

const showRoomHasScheduleController = new ShowRoomHasScheduleController(
    showRoomHasScheduleUseCase
);

export { showRoomHasScheduleUseCase, showRoomHasScheduleController };