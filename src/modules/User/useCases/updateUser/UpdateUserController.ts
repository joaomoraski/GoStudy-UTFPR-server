/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { User } from '../../../../entities/User'

class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, fk_id_institute, name, ra, telephone, email, password, isAdmin } = request.body;
        const user : User = await this.updateUserUseCase.execute({
            id,
            fk_id_institute,
            name,
            ra,
            telephone,
            email,
            password,
            isAdmin
        });

        return response.status(201).json(user);
    }
}

export { UpdateUserController };