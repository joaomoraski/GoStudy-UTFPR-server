import { Request, Response } from 'express';
import { DeleteRoomHasScheduleUseCase } from './DeleteRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class DeleteRoomHasScheduleController{
    constructor(
        private deleteRoomHasScheduleUseCase: DeleteRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const id : string = request.params.id;

        const roomHasSchedule: RoomHasSchedule = await this.deleteRoomHasScheduleUseCase.execute(id);

        if (roomHasSchedule !== null) return response.status(200).json(roomHasSchedule);
        return response.status(404).send('Relação Sala/Horário não encontrada');
    }
}

export { DeleteRoomHasScheduleController };