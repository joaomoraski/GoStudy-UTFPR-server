import { Reservation } from "../../../entities/Reservation";
import { IReservationRepository } from "../IReservationRepository";

// Apagar aqui
const fk_id_room = '1';
const fk_id_user = '1';
const fk_id_schedule = '1';
const date: Date = new Date();

class ReservationRepository implements IReservationRepository {

    async create(reservation: Reservation): Promise<Reservation> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return reservation;
    }

    async listAllReservations(): Promise<Reservation[]> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const reservation: Reservation = Reservation.create(fk_id_room,fk_id_schedule,fk_id_user,date);
        const reservations: Reservation[] = [reservation];
        return reservations;
    }

    async findById(id: string): Promise<Reservation> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const reservation: Reservation = Reservation.create(fk_id_room, fk_id_schedule, fk_id_user, date, id);
        return reservation;
    }

    async update(reservation: Reservation): Promise<Reservation> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return reservation;
    }

    async delete(reservation: Reservation): Promise<Reservation> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return reservation;
    }
}

export { ReservationRepository };