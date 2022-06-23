import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { IUserDTO } from '../UserDTO'
import { User } from '../../../../entities/User'

class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            fk_id_institute,
            name,
            ra,
            telephone,
            email,
            password,
            isAdmin
        }: IUserDTO = request.body;

        const user : User = await this.createUserUseCase.execute({
            fk_id_institute,
            name,
            ra,
            telephone,
            email,
            password,
            isAdmin
        });

        if (user !== null) return response.status(201).json(user);
        return response.status(404).send('Erro ao criar usuário');
    }
}

export { CreateUserController };