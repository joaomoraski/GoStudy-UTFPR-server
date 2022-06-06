/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CreateRoomUseCase } from './CreateRoomUseCase';
import { CreateRoomController} from './CreateRoomController';
import { RoomRepository } from '../../implementations/RoomRepository';

const roomRepository = new RoomRepository();
const createRoomUseCase = new CreateRoomUseCase(
    roomRepository
);

const createRoomController = new CreateRoomController(
    createRoomUseCase
);

export { createRoomUseCase, createRoomController };