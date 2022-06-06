/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateRoomUseCase } from './UpdateRoomUseCase';
import { UpdateRoomController} from './UpdateRoomController';
import { RoomRepository } from '../../implementations/RoomRepository';

const roomRepository = new RoomRepository();
const updateRoomUseCase = new UpdateRoomUseCase(
    roomRepository
);

const updateRoomController = new UpdateRoomController(
    updateRoomUseCase
);

export { updateRoomUseCase, updateRoomController };