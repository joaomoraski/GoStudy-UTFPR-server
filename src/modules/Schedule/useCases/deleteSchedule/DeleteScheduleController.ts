import { Request, Response } from 'express';
import { DeleteScheduleUseCase } from './DeleteScheduleUseCase';
import { Schedule } from '../../../../entities/Schedule'

class DeleteScheduleController{
    constructor(
        private deleteScheduleUseCase: DeleteScheduleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id:string = request.body;

        const schedule: Schedule = await this.deleteScheduleUseCase.execute(id);

        return response.status(201).json(schedule);
    }
}

export { DeleteScheduleController };