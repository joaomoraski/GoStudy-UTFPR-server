import { ReservationDB } from "../../../database/models/Reservation";
import { Reservation } from "../../../entities/Reservation";
import { IReservationRepository } from "../IReservationRepository";
import { Op, Sequelize, QueryTypes, Model } from "sequelize";
import { RoomDB } from "../../../database/models/Room";
import { ScheduleDB } from "../../../database/models/Schedule";
import { connection } from "../../../connectDB"
import { mapFinderOptions } from "sequelize/types/utils";


class ReservationRepository implements IReservationRepository {

    async create(reservation: Reservation): Promise<Reservation> {
        try {
            await ReservationDB.create({fk_id_room: reservation.fk_id_room, fk_id_user: reservation.fk_id_user, fk_id_schedule: reservation.fk_id_schedule, reservationDate: reservation.reservationDate});
            return reservation;
        } catch(err) {
            throw new Error(err);
        }
    }

    async findAfterDate(data: string) : Promise<Reservation[]> {
        try {
            const reservations : any[] = await ReservationDB.findAll();
            const res : any[] = reservations.filter(reservation => {
                if ((reservation.reservationDate as string).split("-")[0] > data.split("-")[0] || (reservation.reservationDate as string).split("-")[1] > data.split("-")[1] || (reservation.reservationDate as string).split("-")[2] > data.split("-")[2]) return reservation;
            });
            return res;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
        
    }

    async findByRoomAndDate(room: string, reservationDate: string): Promise<Reservation[]> {
        const schedules : any[] = await connection.query(`select s.* from schedule s where s.id in (select h.fk_id_schedule from room_has_schedule h where fk_id_room = ${room} );`, {type: QueryTypes.SELECT});
        const reservations : any[] = await ReservationDB.findAll({
            include: [{model: RoomDB}, {model: ScheduleDB}],
            where: {
                fk_id_room: room,
                reservationDate: reservationDate
            }
        });

        const indices : any[] = reservations.map(reservation => {
            return reservation.schedule.id;
        })

        const res: any[] = schedules.map(schedule => {
            for(let i = 0; i < indices.length; i++) {
                // eslint-disable-next-line eqeqeq
                if (schedule.id == indices[i]) schedule.isFree = 0;
                else schedule.isFree = 1;
            }
            return schedule;
        })
        
        return res;
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