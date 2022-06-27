import { Request, Response } from 'express';
import { ShowReservationUseCase } from './ShowReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class ShowReservationController{
    constructor(
        private showReservationUseCase: ShowReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const reservation: Reservation[] = await this.showReservationUseCase.execute();

        if (reservation !== null) return response.status(200).json(reservation);
        return response.status(404).send("Erro ao buscar reservas")
    }
}

export { ShowReservationController };