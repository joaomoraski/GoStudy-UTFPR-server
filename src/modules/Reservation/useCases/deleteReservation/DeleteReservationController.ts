import { Request, Response } from 'express';
import { DeleteReservationUseCase } from './DeleteReservationUseCase';
import { Reservation } from '../../../../entities/Reservation'

class DeleteReservationController{
    constructor(
        private deleteReservationUseCase: DeleteReservationUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id:string = request.body;

        const reservation: Reservation = await this.deleteReservationUseCase.execute(id);

        return response.status(201).json(reservation);
    }
}

export { DeleteReservationController };