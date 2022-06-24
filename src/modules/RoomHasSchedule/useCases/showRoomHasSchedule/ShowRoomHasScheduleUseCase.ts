import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

class ShowRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute(): Promise<RoomHasSchedule[]>{
        try {
            const roomHasSchedule:RoomHasSchedule[] = await this.roomHasScheduleRepository.listAllRoomHasSchedules();

            return roomHasSchedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { ShowRoomHasScheduleUseCase };