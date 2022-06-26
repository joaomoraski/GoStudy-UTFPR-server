import { Request, Response } from 'express';
import { BrowseReservationUseCase } from './BrowseReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class BrowseReservationController{
    constructor(
        private browseReservationUseCase: BrowseReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const reservation: Reservation = await this.browseReservationUseCase.execute(request.params.id);
        if (reservation !== null) return response.status(200).json(reservation);
        return response.status(404).send("Reserva não encontrada");
    }

    async handleFilter(request: Request, response: Response) : Promise<Response> {
        const reservations: Reservation[] = await this.browseReservationUseCase.executeFilter(request.params.id_room, request.params.reservationDate);
        if (reservations !== null) return response.status(202).json(reservations);
        return response.status(404).send("Nenhuma reserva encontrada");
    }
}

export { BrowseReservationController };