import { Room } from "../../../entities/Room";
import { IRoomRepository } from "../IRoomRepository";

// Apagar aqui
const fk_id_institute = '1';
const number = 1;

class RoomRepository implements IRoomRepository {

    async create(room: Room): Promise<Room> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return room;
    }

    async listAllRooms(): Promise<Room[]> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const room: Room = Room.create(fk_id_institute,number);
        const rooms: Room[] = [room];
        return rooms;
    }

    async findById(id: string): Promise<Room> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const room: Room = Room.create(fk_id_institute,number,id);
        return room;
    }

    async update(room: Room): Promise<Room> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return room;
    }

    async delete(room: Room): Promise<Room> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return room;
    }
}

export { RoomRepository };