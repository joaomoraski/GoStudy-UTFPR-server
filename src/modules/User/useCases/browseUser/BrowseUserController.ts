import { Request, Response } from 'express';
import { BrowseUserUseCase } from './BrowseUserUseCase';
import { User } from '../../../../entities/User'

class BrowseUserController{
    constructor(
        private browseUserUseCase: BrowseUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const user: User = await this.browseUserUseCase.execute(request.params.id);
        if (user) {
            return response.status(201).json(user);
        }
        return response.status(404).json({Erro : 'Usuário não encontrado'});
    }
}

export { BrowseUserController };