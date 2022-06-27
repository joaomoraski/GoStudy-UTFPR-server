import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

class BrowseRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute(query:string): Promise<RoomHasSchedule>{
        try {
            const roomHasSchedule:RoomHasSchedule = await this.roomHasScheduleRepository.findById(query);
            if (!roomHasSchedule) throw new Error('Relação Sala/Horário não existe');
            return roomHasSchedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseRoomHasScheduleUseCase };