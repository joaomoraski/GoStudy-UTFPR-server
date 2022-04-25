/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateRoomUseCase } from './UpdateRoomUseCase';
import { Room } from '../../../../entities/Room'

class UpdateRoomController {
    constructor(
        private updateRoomUseCase: UpdateRoomUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, fk_id_institute, number } = request.body;
        const room: Room = await this.updateRoomUseCase.execute({
            id,
            fk_id_institute,
            number
        });

        return response.status(201).json(room);
    }
}

export { UpdateRoomController };