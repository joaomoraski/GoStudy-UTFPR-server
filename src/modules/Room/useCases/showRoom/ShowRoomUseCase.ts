import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class ShowRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(): Promise<Room[]>{
        const room:Room[] = await this.roomRepository.listAllRooms();

        if(!room) {
            throw new Error('Sala não existe');
        }

        return room;
    }
}
export { ShowRoomUseCase };