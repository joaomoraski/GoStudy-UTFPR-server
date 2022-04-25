import { Request, Response } from 'express';
import { CreateInstituteUseCase } from './CreateInstituteUseCase';
import { IInstituteDTO } from '../InstituteDTO'
import { Institute } from '../../../../entities/Institute'

class CreateInstituteController{
    constructor(
        private createInstituteUseCase: CreateInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            name,
            city,
            telephone,
            opening_time,
            closing_time
        }:IInstituteDTO = request.body;

        const institute: Institute = await this.createInstituteUseCase.execute({
            name,
            city,
            telephone,
            opening_time,
            closing_time
        });

        return response.status(201).json(institute);
    }
}

export { CreateInstituteController };