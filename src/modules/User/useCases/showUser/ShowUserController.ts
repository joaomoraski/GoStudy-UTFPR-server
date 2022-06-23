import { Request, Response } from 'express';
import { ShowUserUseCase } from './ShowUserUseCase';
import { User } from '../../../../entities/User'

class ShowUserController{
    constructor(
        private showUserUseCase: ShowUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const user : User[] = await this.showUserUseCase.execute();

        if (user !== null) return response.status(201).json(user);
        return response.status(404).send("Erro ao buscar usuários");
    }
}

export { ShowUserController };