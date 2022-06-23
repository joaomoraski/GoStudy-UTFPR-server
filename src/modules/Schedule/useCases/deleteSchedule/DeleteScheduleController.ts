import { Request, Response } from 'express';
import { DeleteScheduleUseCase } from './DeleteScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class DeleteScheduleController{
    constructor(
        private deleteScheduleUseCase: DeleteScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id : string = request.params.id;

        const schedule: Schedule = await this.deleteScheduleUseCase.execute(id);

        if (schedule !== null) return response.status(201).json(schedule);
        return response.status(404).send('Horário não encontrado');
    }
}

export { DeleteScheduleController };