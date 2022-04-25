import { Room } from '../../../../entities/Room';
import { IRoomRepository } from '../../IRoomRepository';

interface IUpdateRoom {
    id: string;
    fk_id_institute?: string;
    number?: number;
}

class UpdateRoomUseCase {
    constructor(
        private roomRepository: IRoomRepository
    ) { }

    async execute({
        id,
        fk_id_institute,
        number
    }: IUpdateRoom): Promise<Room> {
        const room: Room = await this.roomRepository.findById(id);

        if (!room) {
            throw new Error('Sala não existe');
        }

        room.fk_id_institute = fk_id_institute ? fk_id_institute : room.fk_id_institute;
        room.number = number ? number : room.number;

        await this.roomRepository.update(room);

        return room;
    }
}
export { UpdateRoomUseCase };