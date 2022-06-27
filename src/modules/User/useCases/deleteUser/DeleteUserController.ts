import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import { User } from '../../../../entities/User'

class DeleteUserController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const id : string = request.params.id;

        const user : User = await this.deleteUserUseCase.execute(id);

        if (user !== null) return response.status(200).json(user);
        return response.status(404).send('Usuário não encontrado');
    }
}

export { DeleteUserController };