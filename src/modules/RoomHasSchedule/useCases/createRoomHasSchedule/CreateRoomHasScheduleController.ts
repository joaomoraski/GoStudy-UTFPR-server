import { Request, Response } from 'express';
import { CreateRoomHasScheduleUseCase } from './CreateRoomHasScheduleUseCase';
import { IRoomHasScheduleDTO } from '../RoomHasScheduleDTO'
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class CreateRoomHasScheduleController {
    constructor(
        private createRoomHasScheduleUseCase: CreateRoomHasScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const {
            fk_id_room,
            fk_id_schedule
        }: IRoomHasScheduleDTO = request.body;

        const room: RoomHasSchedule = await this.createRoomHasScheduleUseCase.execute({
            fk_id_room,
            fk_id_schedule
        });

        if (room !== null) return response.status(201).json(room);
        return response.status(404).send('Erro ao criar relação Sala/Horário');
    }
}

export { CreateRoomHasScheduleController };