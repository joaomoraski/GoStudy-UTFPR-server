import { Room } from "../../entities/Room";

interface IRoomRepository {
    create(Room: Room): Promise<Room>;
    listAllRooms(): Promise<Room[]>;
    listByInstitute(instituteId: string): Promise<Room[]>;
    findById(id: string): Promise<Room>;
    update(Room: Room): Promise<Room>;
    delete(Room: Room): Promise<Room>;
}

export { IRoomRepository };