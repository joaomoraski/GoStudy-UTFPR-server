/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DeleteRoomUseCase } from './DeleteRoomUseCase';
import { DeleteRoomController} from './DeleteRoomController';
import { RoomRepository } from '../../implementations/RoomRepository';

const roomRepository = new RoomRepository();
const deleteRoomUseCase = new DeleteRoomUseCase(
    roomRepository
);

const deleteRoomController = new DeleteRoomController(
    deleteRoomUseCase
);

export { deleteRoomUseCase, deleteRoomController };