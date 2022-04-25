class RoomHasSchedule {
    id?: string;
    fk_id_room: string;
    fk_id_schedule: string;

    constructor({ fk_id_room, fk_id_schedule }: RoomHasSchedule) {
        return Object.assign(this, {
            fk_id_room,
            fk_id_schedule
        });
    }

    static create(fk_id_room: string, fk_id_schedule: string, id?: string) {
        const roomSchedule = new RoomHasSchedule({
            id,
            fk_id_room,
            fk_id_schedule
        });
        return roomSchedule;
    }
}

export { RoomHasSchedule };