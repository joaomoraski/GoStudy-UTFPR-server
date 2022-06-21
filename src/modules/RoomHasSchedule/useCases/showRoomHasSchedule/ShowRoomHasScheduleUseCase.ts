import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

class ShowRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute(): Promise<RoomHasSchedule[]>{
        const roomHasSchedule:RoomHasSchedule[] = await this.roomHasScheduleRepository.listAllRoomHasSchedules();

        if(!roomHasSchedule) {
            throw new Error('Sala não existe');
        }

        return roomHasSchedule;
    }
}
export { ShowRoomHasScheduleUseCase };