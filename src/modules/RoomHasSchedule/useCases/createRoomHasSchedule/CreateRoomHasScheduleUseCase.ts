import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';
import { IRoomHasScheduleDTO } from '../RoomHasScheduleDTO';

class CreateRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute( data: IRoomHasScheduleDTO): Promise<RoomHasSchedule>{
        try {
            const roomHasSchedule: RoomHasSchedule = new RoomHasSchedule(data);

            await this.roomHasScheduleRepository.create(roomHasSchedule);
            if (!roomHasSchedule) throw new Error('Null Exception');

            return roomHasSchedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { CreateRoomHasScheduleUseCase };