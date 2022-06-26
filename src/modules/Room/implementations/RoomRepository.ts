import { RoomDB } from "../../../database/models/Room";
import { Room } from "../../../entities/Room";
import { IRoomRepository } from "../IRoomRepository";


class RoomRepository implements IRoomRepository {

    async create(room: Room): Promise<Room> {
        try {
            const dbroom = await RoomDB.create({ fk_id_institute: room.fk_id_institute, number: room.number });
            room.id = dbroom.getDataValue('id').toString();
            return room;
        } catch (error) {
            throw new Error(error);
        }
    }

    async listAllRooms(): Promise<Room[]> {
        const rooms: any[] = await RoomDB.findAll();
        return rooms;
    }

    async findById(id: string): Promise<Room> {
        const room: any = await RoomDB.findByPk(id);
        return room;
    }

    async update(room: Room): Promise<Room> {
        await RoomDB.update({ fk_id_institute: room.fk_id_institute, number: room.number }, { where: { id: room.id } });
        return room;
    }

    async delete(room: Room): Promise<Room> {
        try {
            await RoomDB.destroy({ where: { id: room.id } });
            return room;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { RoomRepository };