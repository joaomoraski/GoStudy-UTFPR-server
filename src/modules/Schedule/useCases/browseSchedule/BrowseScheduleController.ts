import { Request, Response } from 'express';
import { BrowseScheduleUseCase } from './BrowseScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class BrowseScheduleController{
    constructor(
        private browseScheduleUseCase: BrowseScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const schedule: Schedule = await this.browseScheduleUseCase.execute(request.params.id);
        if (schedule) {
            return response.status(201).json(schedule);
        }
        return response.status(404).json({Erro : 'Horário não encontrado'});
    }
}

export { BrowseScheduleController };