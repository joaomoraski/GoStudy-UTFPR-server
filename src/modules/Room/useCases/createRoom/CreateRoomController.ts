import { Request, Response } from 'express';
import { CreateRoomUseCase } from './CreateRoomUseCase';
import { IRoomDTO } from '../RoomDTO'
import { Room } from '../../../../entities/Room'

class CreateUserController {
    constructor(
        private createroomUseCase: CreateRoomUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            fk_id_institute,
            number
        }: IRoomDTO = request.body;

        const room: Room = await this.createroomUseCase.execute({
            fk_id_institute,
            number
        });

        return response.status(201).json(room);
    }
}

export { CreateUserController };