import { Request, Response } from 'express';
import { DeleteRoomHasScheduleUseCase } from './DeleteRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class DeleteRoomHasScheduleController{
    constructor(
        private deleteRoomHasScheduleUseCase: DeleteRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id:string = request.body;

        const roomHasSchedule: RoomHasSchedule = await this.deleteRoomHasScheduleUseCase.execute(id);

        return response.status(201).json(roomHasSchedule);
    }
}

export { DeleteRoomHasScheduleController };