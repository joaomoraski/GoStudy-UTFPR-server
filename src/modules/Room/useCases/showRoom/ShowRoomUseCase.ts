import { UserRepository } from '../../../User/implementations/UserRepository';
import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

class ShowRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) {}
    
    async execute(instituteId: string, userId: string): Promise<Room[]>{
        try {
            const userRepo = new UserRepository();
            const user = await userRepo.findById(userId);
            if (user.isAdmin) {
                const room : Room[] = await this.roomRepository.listAllRooms();
                return room;
            }
            const room : Room[] = await this.roomRepository.listByInstitute(instituteId);
            return room;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { ShowRoomUseCase };