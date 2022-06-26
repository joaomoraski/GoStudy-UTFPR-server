import { ReservationDB } from "../../../database/models/Reservation";
import { Reservation } from "../../../entities/Reservation";
import { IReservationRepository } from "../IReservationRepository";


class ReservationRepository implements IReservationRepository {

    async create(reservation: Reservation): Promise<Reservation> {
        try {
            await ReservationDB.create({fk_id_room: reservation.fk_id_room, fk_id_user: reservation.fk_id_user, fk_id_schedule: reservation.fk_id_schedule, reservationDate: reservation.reservationDate});
            return reservation;
        } catch(err) {
            throw new Error(err);
        }
    }

    async listAllReservations(): Promise<Reservation[]> {
        const reservations: any[] = await ReservationDB.findAll();
        return reservations;
    }

    async findById(id: string): Promise<Reservation> {
        const reservation: any = await ReservationDB.findByPk(id);
        return reservation;
    }

    async update(reservation: Reservation): Promise<Reservation> {
        await ReservationDB.update({fk_id_room: reservation.fk_id_room, fk_id_user: reservation.fk_id_user, fk_id_schedule: reservation.fk_id_schedule, reservationDate: reservation.reservationDate}, {where: {id: reservation.id}});
        return reservation;
    }

    async delete(reservation: Reservation): Promise<Reservation> {
        try {
            await ReservationDB.destroy({where: {id: reservation.id}});
            return reservation;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { ReservationRepository };