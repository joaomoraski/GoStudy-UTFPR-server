import { RoomHasSchedule } from "../../../entities/RoomHasSchedule";
import { IRoomHasScheduleRepository } from "../IRoomHasScheduleRepository";

// Apagar aqui
const fk_id_room = '';
const fk_id_schedule = '';

class RoomHasScheduleRepository implements IRoomHasScheduleRepository {

    async create(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return roomHasScheduleRoomHasSchedule;
    }

    async listAllRoomHasSchedules(): Promise<RoomHasSchedule[]> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const roomHasScheduleRoomHasSchedule: RoomHasSchedule = RoomHasSchedule.create(fk_id_room, fk_id_schedule);
        const roomHasScheduleRoomHasSchedules: RoomHasSchedule[] = [roomHasScheduleRoomHasSchedule];
        return roomHasScheduleRoomHasSchedules;
    }

    async findById(id: string): Promise<RoomHasSchedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const roomHasScheduleRoomHasSchedule: RoomHasSchedule = RoomHasSchedule.create(fk_id_room, fk_id_schedule, id);
        return roomHasScheduleRoomHasSchedule;
    }

    async update(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return roomHasScheduleRoomHasSchedule;
    }

    async delete(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return roomHasScheduleRoomHasSchedule;
    }
}

export { RoomHasScheduleRepository };