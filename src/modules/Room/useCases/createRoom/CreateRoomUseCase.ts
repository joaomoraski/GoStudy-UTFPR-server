import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';
import { IRoomDTO } from '../RoomDTO';

class CreateRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute( data: IRoomDTO): Promise<Room>{
        try {
            const room: Room = new Room(data);

            await this.roomRepository.create(room);
            if (!room) throw new Error("Null Exception");
            return room;
        } catch (error) {
            console.log((error as Error).message);
            return null;
            
        }
    }
}
export { CreateRoomUseCase };