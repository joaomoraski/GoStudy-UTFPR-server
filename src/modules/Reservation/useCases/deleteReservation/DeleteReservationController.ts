/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Request, Response } from 'express';
import { DeleteReservationUseCase } from './DeleteReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class DeleteReservationController{
    constructor(
        private deleteReservationUseCase: DeleteReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id = request.params.id;
        const reservation: Reservation = await this.deleteReservationUseCase.execute(id);

        if (reservation !== null) return response.status(201).json(reservation);
        return response.status(404).send("Reserva não encontrada!");
    }
}

export { DeleteReservationController };