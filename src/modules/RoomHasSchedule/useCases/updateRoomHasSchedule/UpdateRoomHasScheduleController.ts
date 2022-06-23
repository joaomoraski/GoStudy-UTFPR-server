/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateRoomHasScheduleUseCase } from './UpdateRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class UpdateRoomHasScheduleController {
    constructor(
        private updateRoomHasScheduleUseCase: UpdateRoomHasScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { fk_id_room, fk_id_schedule } = request.body;
        const id = request.params.id;
        const roomHasSchedule: RoomHasSchedule = await this.updateRoomHasScheduleUseCase.execute({
            id,
            fk_id_room,
            fk_id_schedule
        });

        if (roomHasSchedule !== null) return response.status(201).json(roomHasSchedule);
        return response.status(404).send('Falha ao atualizar a relação Sala/Horário');
    }
}

export { UpdateRoomHasScheduleController };