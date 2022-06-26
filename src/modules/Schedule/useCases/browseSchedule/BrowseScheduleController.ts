import { Request, Response } from 'express';
import { BrowseScheduleUseCase } from './BrowseScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class BrowseScheduleController{
    constructor(
        private browseScheduleUseCase: BrowseScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const schedule: Schedule = await this.browseScheduleUseCase.execute(request.params.id);
        if (schedule !== null) return response.status(200).json(schedule);
        return response.status(404).send('Horário não encontrado');
    }
}

export { BrowseScheduleController };