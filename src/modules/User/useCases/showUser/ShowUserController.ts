import { Request, Response } from 'express';
import { ShowUserUseCase } from './ShowUserUseCase';
import { User } from '../../../../entities/User'

class ShowUserController{
    constructor(
        private showUserUseCase: ShowUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const user : User[] = await this.showUserUseCase.execute();

        return response.status(201).json(user);
    }
}

export { ShowUserController };