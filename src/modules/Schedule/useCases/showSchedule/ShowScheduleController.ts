import { Request, Response } from 'express';
import { ShowScheduleUseCase } from './ShowScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class ShowScheduleController{
    constructor(
        private showScheduleUseCase: ShowScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const schedule : Schedule[] = await this.showScheduleUseCase.execute();

        if (schedule !== null) return response.status(201).json(schedule);
        return response.status(404).send('Erro ao buscar horários');
    }
}

export { ShowScheduleController };