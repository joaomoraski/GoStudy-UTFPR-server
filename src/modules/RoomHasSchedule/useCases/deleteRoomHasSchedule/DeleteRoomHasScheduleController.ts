import { Request, Response } from 'express';
import { DeleteRoomHasScheduleUseCase } from './DeleteRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class DeleteRoomHasScheduleController{
    constructor(
        private deleteRoomHasScheduleUseCase: DeleteRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id : string = request.params.id;

        const roomHasSchedule: RoomHasSchedule = await this.deleteRoomHasScheduleUseCase.execute(id);

        if (roomHasSchedule !== null) return response.status(201).json(roomHasSchedule);
        return response.status(404).send('Relação Sala/Horário não encontrada');
    }
}

export { DeleteRoomHasScheduleController };