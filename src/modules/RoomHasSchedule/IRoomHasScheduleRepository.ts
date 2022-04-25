import { RoomHasSchedule } from "../../entities/RoomHasSchedule";

interface IRoomHasScheduleRepository {
    create(RoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule>;
    listAllRoomHasSchedules(): Promise<RoomHasSchedule[]>;
    findById(id: string): Promise<RoomHasSchedule>;
    update(RoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule>;
    delete(RoomHasSchedule: RoomHasSchedule): Promise<RoomHasSchedule>;
}

export { IRoomHasScheduleRepository };