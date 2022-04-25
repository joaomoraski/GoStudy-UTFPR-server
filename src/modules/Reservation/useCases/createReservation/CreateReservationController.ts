import { Request, Response } from 'express';
import { CreateReservationUseCase } from './CreateReservationUseCase';
import { IReservationDTO } from '../ReservationDTO'
import { Reservation } from '../../../../entities/Reservation'

class CreateReservationController {
    constructor(
        private createReservationUseCase: CreateReservationUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            date
        }: IReservationDTO = request.body;

        const Reservation: Reservation = await this.createReservationUseCase.execute({
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            date
        });

        return response.status(201).json(Reservation);
    }
}

export { CreateReservationController };