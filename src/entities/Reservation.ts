class Reservation{
    id?: string;
    fk_id_room: string;
    fk_id_user: string;
    fk_id_schedule: string;
    reservationDate: string;

    constructor({fk_id_room, fk_id_user, fk_id_schedule, reservationDate}: Reservation){
        return Object.assign(this, {
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            reservationDate
        });
    }

    static create(fk_id_room:string, fk_id_user:string, fk_id_schedule:string, reservationDate:string, id?:string) {
        const reservation = new Reservation({
            id,
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            reservationDate
        });
        return reservation;
    }
}

export { Reservation };