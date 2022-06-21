import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';
import { IRoomHasScheduleDTO } from '../RoomHasScheduleDTO';

class CreateRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute( data: IRoomHasScheduleDTO): Promise<RoomHasSchedule>{
        const roomHasSchedule: RoomHasSchedule = new RoomHasSchedule(data);

        await this.roomHasScheduleRepository.create(roomHasSchedule);

        return roomHasSchedule;
    }
}
export { CreateRoomHasScheduleUseCase };