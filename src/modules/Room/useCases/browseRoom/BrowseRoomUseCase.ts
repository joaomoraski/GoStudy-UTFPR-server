import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class BrowseRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(query:string): Promise<Room>{
        try {
            const room:Room = await this.roomRepository.findById(query);
            return room;
        } catch (error) {
            throw new Error('Sala não existe');
        }

    }
}
export { BrowseRoomUseCase };