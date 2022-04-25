interface IReservationDTO{
    fk_id_room: string;
    fk_id_user: string;
    fk_id_schedule: string;
    date: Date;
}

export { IReservationDTO };