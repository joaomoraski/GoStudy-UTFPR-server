import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';
import { IRoomDTO } from '../RoomDTO';

class CreateRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute( data: IRoomDTO): Promise<Room>{
        const room: Room = new Room(data);

        await this.roomRepository.create(room);

        return room;
    }
}
export { CreateRoomUseCase };