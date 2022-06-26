import { Request, Response } from 'express';
import { BrowseRoomUseCase } from './BrowseRoomUseCase';
import { Room } from '../../../../entities/Room'

class BrowseRoomController{
    constructor(
        private browseRoomUseCase: BrowseRoomUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const room: Room = await this.browseRoomUseCase.execute(request.params.id);
        if (room) {
            return response.status(200).json(room);
        }
        return response.status(404).json({message: 'Sala não encontrada'});
    }
}

export { BrowseRoomController };