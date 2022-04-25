class Reservation{
    id?: string;
    fk_id_room: string;
    fk_id_user: string;
    fk_id_schedule: string;
    date: Date;

    constructor({fk_id_room, fk_id_user, fk_id_schedule, date}: Reservation){
        return Object.assign(this, {
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            date
        });
    }

    static create(fk_id_room:string, fk_id_user:string, fk_id_schedule:string, date:Date, id?:string) {
        const reservation = new Reservation({
            id,
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            date
        });
        return reservation;
    }
}

export { Reservation };