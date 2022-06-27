import { Request, Response } from 'express';
import { ShowRoomHasScheduleUseCase } from './ShowRoomHasScheduleUseCase';
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class ShowRoomHasScheduleController{
    constructor(
        private showRoomHasScheduleUseCase: ShowRoomHasScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const roomHasSchedule: RoomHasSchedule[] = await this.showRoomHasScheduleUseCase.execute();

        if (roomHasSchedule !== null) return response.status(200).json(roomHasSchedule);
        return response.status(404).send('Erro ao buscar Relação Sala/Horário');
    }
}

export { ShowRoomHasScheduleController };