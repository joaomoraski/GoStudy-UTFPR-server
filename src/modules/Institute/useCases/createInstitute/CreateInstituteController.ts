/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { CreateInstituteUseCase } from './CreateInstituteUseCase';
import { IInstituteDTO } from '../InstituteDTO'
import { Institute } from '../../../../entities/Institute'

class CreateInstituteController{
    constructor(
        private createInstituteUseCase: CreateInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const {
            name,
            city,
            telephone,
            openingTime,
            closingTime
        } = request.body;

        const instituteDTO:IInstituteDTO = {name,city,telephone,openingTime,closingTime}

        const institute: Institute = await this.createInstituteUseCase.execute(instituteDTO);

        return response.status(201).json(institute);
    }
}

export { CreateInstituteController };