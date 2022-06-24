/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateReservationUseCase } from './UpdateReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class UpdateReservationController {
    constructor(
        private updateReservationUseCase: UpdateReservationUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { fk_id_room, fk_id_user, fk_id_schedule, reservationDate } = request.body;
        const id = request.params.id;
        const reservation: Reservation = await this.updateReservationUseCase.execute({
            id,
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            reservationDate
        });

        if (reservation !== null) return response.status(201).json(reservation);
        return response.status(404).send("Falha ao atualizar a reserva");
    }
}

export { UpdateReservationController };