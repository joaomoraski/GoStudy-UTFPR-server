import { BrowseRoomUseCase } from './BrowseRoomUseCase';
import { BrowseRoomController} from './BrowseRoomController';
import { RoomRepository } from '../../implementations/RoomRepository';

const roomRepository = new RoomRepository();
const browseRoomUseCase = new BrowseRoomUseCase(
    roomRepository
);

const browseRoomController = new BrowseRoomController(
    browseRoomUseCase
);

export { browseRoomUseCase, browseRoomController };