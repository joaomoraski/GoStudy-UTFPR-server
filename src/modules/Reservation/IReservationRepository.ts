import { Reservation } from "../../entities/Reservation";

interface IReservationRepository {
    create(Reservation: Reservation): Promise<Reservation>;
    listAllReservations(): Promise<Reservation[]>;
    findByRoomAndDate(room: string, reservationDate: string): Promise<Reservation[]>;
    findAfterDate(data: string) : Promise<Reservation[]>;
    findById(id: string): Promise<Reservation>;
    update(Reservation: Reservation): Promise<Reservation>;
    delete(Reservation: Reservation): Promise<Reservation>;
}

export { IReservationRepository };