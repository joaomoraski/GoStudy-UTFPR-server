import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class ShowRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(): Promise<Room[]>{
        try {
            const room : Room[] = await this.roomRepository.listAllRooms();
            return room;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { ShowRoomUseCase };