import { ShowRoomUseCase } from './ShowRoomUseCase';
import { ShowRoomController} from './ShowRoomController';
import { RoomRepository } from '../../implementations/RoomRepository';

const roomRepository = new RoomRepository();
const showRoomUseCase = new ShowRoomUseCase(
    roomRepository
);

const showRoomController = new ShowRoomController(
    showRoomUseCase
);

export { showRoomUseCase, showRoomController };