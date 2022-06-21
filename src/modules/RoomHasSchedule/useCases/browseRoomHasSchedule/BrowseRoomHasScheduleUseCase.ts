import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

class BrowseRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute(query:string): Promise<RoomHasSchedule>{
        try {
            const roomHasSchedule:RoomHasSchedule = await this.roomHasScheduleRepository.findById(query);
            return roomHasSchedule;
        } catch (error) {
            throw new Error('Relação Sala/Horário não existe');
        }

    }
}
export { BrowseRoomHasScheduleUseCase };