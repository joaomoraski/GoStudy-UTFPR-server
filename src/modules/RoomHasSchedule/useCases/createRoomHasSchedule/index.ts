/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CreateRoomHasScheduleUseCase } from './CreateRoomHasScheduleUseCase';
import { CreateRoomHasScheduleController} from './CreateRoomHasScheduleController';
import { RoomHasScheduleRepository } from '../../implementations/RoomHasScheduleRepository';

const roomhasScheduleRepository = new RoomHasScheduleRepository();
const createRoomHasScheduleUseCase = new CreateRoomHasScheduleUseCase(
    roomhasScheduleRepository
);

const createRoomHasScheduleController = new CreateRoomHasScheduleController(
    createRoomHasScheduleUseCase
);

export { createRoomHasScheduleUseCase, createRoomHasScheduleController };