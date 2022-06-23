import { Request, Response } from 'express';
import { BrowseReservationUseCase } from './BrowseReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class BrowseReservationController{
    constructor(
        private browseReservationUseCase: BrowseReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const reservation: Reservation = await this.browseReservationUseCase.execute(request.params.id);
        if (reservation !== null) return response.status(201).json(reservation);
        return response.status(404).send("Reserva não encontrada");
    }
}

export { BrowseReservationController };