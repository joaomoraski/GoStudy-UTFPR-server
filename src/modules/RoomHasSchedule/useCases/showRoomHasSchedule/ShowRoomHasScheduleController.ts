import { Request, Response } from 'express';
import { ShowRoomHasScheduleUseCase } from './ShowRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class ShowRoomHasScheduleController{
    constructor(
        private showRoomHasScheduleUseCase: ShowRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const roomHasSchedule: RoomHasSchedule[] = await this.showRoomHasScheduleUseCase.execute();

        return response.status(201).json(roomHasSchedule);
    }
}

export { ShowRoomHasScheduleController };