import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class DeleteRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(id: string): Promise<Room>{
        try {
            const room:Room = await this.roomRepository.findById(id);

            if(!room) {
                throw new Error('Sala não existe');
            }

            await this.roomRepository.delete(room);

            return room;
        } catch (error) {
            console.log((error as Error).message);
            return null;
            
        }
    }
}
export { DeleteRoomUseCase };