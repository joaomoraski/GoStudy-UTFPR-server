/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateReservationUseCase } from './UpdateReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class UpdateReservationController {
    constructor(
        private updateReservationUseCase: UpdateReservationUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, fk_id_room, fk_id_user, fk_id_schedule, date } = request.body;
        const reservation: Reservation = await this.updateReservationUseCase.execute({
            id,
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            date
        });

        return response.status(201).json(reservation);
    }
}

export { UpdateReservationController };