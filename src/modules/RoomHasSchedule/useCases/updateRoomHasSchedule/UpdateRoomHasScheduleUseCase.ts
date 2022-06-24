import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

interface IUpdateRoomHasSchedule {
    id: string;
    fk_id_room?: string;
    fk_id_schedule?: string;
}

class UpdateRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) { }

    async execute({
        id,
        fk_id_room,
        fk_id_schedule
    }: IUpdateRoomHasSchedule): Promise<RoomHasSchedule> {
        try {
            const roomHasSchedule: RoomHasSchedule = await this.roomHasScheduleRepository.findById(id);

            if (!roomHasSchedule) throw new Error('Sala não existe');

            roomHasSchedule.fk_id_room = fk_id_room ? fk_id_room : roomHasSchedule.fk_id_room;
            roomHasSchedule.fk_id_schedule = fk_id_schedule ? fk_id_schedule : roomHasSchedule.fk_id_schedule;

            await this.roomHasScheduleRepository.update(roomHasSchedule);

            return roomHasSchedule;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { UpdateRoomHasScheduleUseCase };