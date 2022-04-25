/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { UpdateInstituteUseCase } from './UpdateInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class UpdateInstituteController{
    constructor(
        private updateInstituteUseCase: UpdateInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, city, telephone, opening_time, closing_time } = request.body;
        const institute:Institute = await this.updateInstituteUseCase.execute({
            id,
            name,
            city,
            telephone,
            opening_time,
            closing_time
        });

        return response.status(201).json(institute);
    }
}

export { UpdateInstituteController };