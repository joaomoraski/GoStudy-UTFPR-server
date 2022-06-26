import { Request, Response } from 'express';
import { CreateReservationUseCase } from './CreateReservationUseCase';
import { IReservationDTO } from '../ReservationDTO'
import { Reservation } from '../../../../entities/Reservation'

class CreateReservationController {
    constructor(
        private createReservationUseCase: CreateReservationUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const {
            fk_id_room,
            fk_id_user,
            fk_id_schedule,
            reservationDate
        } = request.body;
        
        const reservationDTO : IReservationDTO = {fk_id_room, fk_id_user, fk_id_schedule, reservationDate};

        const reservation: Reservation = await this.createReservationUseCase.execute(reservationDTO);

        if (reservation !== null) return response.status(201).json(reservation);
        return response.status(404).json({message:"Erro ao criar a Reserva"});
    }
}

export { CreateReservationController };