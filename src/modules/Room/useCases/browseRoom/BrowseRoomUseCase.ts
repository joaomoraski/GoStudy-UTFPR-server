import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class BrowseRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(query:string): Promise<Room>{
        try {
            const room:Room = await this.roomRepository.findById(query);
            if (!room) throw new Error('Sala não existe');
            return room;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseRoomUseCase };