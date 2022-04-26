/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateScheduleUseCase } from './UpdateScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class UpdateScheduleController {
    constructor(
        private updateScheduleUseCase: UpdateScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, label, initial_time, final_time } = request.body;
        const schedule : Schedule = await this.updateScheduleUseCase.execute({
            id,
            label,
            initial_time,
            final_time
        });

        return response.status(201).json(schedule);
    }
}

export { UpdateScheduleController };