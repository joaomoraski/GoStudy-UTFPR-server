import { Request, Response } from 'express';
import { UpdateScheduleUseCase } from './UpdateScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class UpdateScheduleController {
    constructor(
        private updateScheduleUseCase: UpdateScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { label, initial_time, final_time } = request.body;
        const id = request.params.id;
        const schedule : Schedule = await this.updateScheduleUseCase.execute({
            id,
            label,
            initial_time,
            final_time
        });

        if (schedule !== null) return response.status(200).json(schedule);
        return response.status(404).send('Falha ao atualizar os horários');
    }
}

export { UpdateScheduleController };