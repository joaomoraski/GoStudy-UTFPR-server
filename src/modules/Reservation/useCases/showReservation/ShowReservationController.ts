import { Request, Response } from 'express';
import { ShowReservationUseCase } from './ShowReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class ShowReservationController{
    constructor(
        private showReservationUseCase: ShowReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const reservation: Reservation[] = await this.showReservationUseCase.execute();

        return response.status(201).json(reservation);
    }
}

export { ShowReservationController };