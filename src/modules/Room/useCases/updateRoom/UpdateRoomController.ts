import { Request, Response } from 'express';
import { UpdateRoomUseCase } from './UpdateRoomUseCase';
import { Room } from '../../../../entities/Room'

class UpdateRoomController {
    constructor(
        private updateRoomUseCase: UpdateRoomUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { fk_id_institute, number } = request.body;
        const id = request.params.id;
        const room: Room = await this.updateRoomUseCase.execute({
            id,
            fk_id_institute,
            number
        });

        if (room !== null) return response.status(200).json(room);
        return response.status(404).send('Falha ao atualizar a sala');
    }
}

export { UpdateRoomController };