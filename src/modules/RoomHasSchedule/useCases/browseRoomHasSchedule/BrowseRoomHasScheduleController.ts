import { Request, Response } from 'express';
import { BrowseRoomHasScheduleUseCase } from './BrowseRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class BrowseRoomHasScheduleController{
    constructor(
        private browseRoomHasScheduleUseCase: BrowseRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const roomHasSchedule: RoomHasSchedule = await this.browseRoomHasScheduleUseCase.execute(request.params.id);
        if (roomHasSchedule !== null) return response.status(200).json(roomHasSchedule);
        return response.status(404).send('Relação Sala/Horário não encontrado');
    }
}

export { BrowseRoomHasScheduleController };