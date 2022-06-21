/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { RoomHasScheduleDB } from "../../../database/models/RoomHasSchedule";
import { RoomHasSchedule } from "../../../entities/RoomHasSchedule";
import { IRoomHasScheduleRepository } from "../IRoomHasScheduleRepository";


class RoomHasScheduleRepository implements IRoomHasScheduleRepository {

    async create(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        try {
            await RoomHasScheduleDB.create({fk_id_room: roomHasScheduleRoomHasSchedule.fk_id_room, fk_id_schedule: roomHasScheduleRoomHasSchedule.fk_id_schedule});
            return roomHasScheduleRoomHasSchedule;
        } catch (error) {
            throw new Error(error);
        }
    }

    async listAllRoomHasSchedules(): Promise<RoomHasSchedule[]> {
        const roomHasScheduleRoomHasSchedules: any[] = await RoomHasScheduleDB.findAll();
        return roomHasScheduleRoomHasSchedules;
    }

    async findById(id: string): Promise<RoomHasSchedule> {
        const roomHasScheduleRoomHasSchedule: any = await RoomHasScheduleDB.findByPk(id);
        return roomHasScheduleRoomHasSchedule;
    }

    async update(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        await RoomHasScheduleDB.update({fk_id_room: roomHasScheduleRoomHasSchedule.fk_id_room, fk_id_schedule: roomHasScheduleRoomHasSchedule.fk_id_schedule},{where: {id: roomHasScheduleRoomHasSchedule.id}});
        return roomHasScheduleRoomHasSchedule;
    }

    async delete(roomHasScheduleRoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule> {
        await RoomHasScheduleDB.destroy({where: {id: roomHasScheduleRoomHasSchedule.id}});
        return roomHasScheduleRoomHasSchedule;
    }
}

export { RoomHasScheduleRepository };