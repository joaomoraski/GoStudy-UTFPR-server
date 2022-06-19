import { Request, Response } from 'express';
import { ShowRoomUseCase } from './ShowRoomUseCase';
import { Room } from '../../../../entities/Room'

class ShowRoomController{
    constructor(
        private showRoomUseCase: ShowRoomUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const room : Room[] = await this.showRoomUseCase.execute();

        return response.status(201).json(room);
    }
}

export { ShowRoomController };