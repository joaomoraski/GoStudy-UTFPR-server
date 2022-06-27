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

        if (!name || !city || !telephone || !openingTime || !closingTime) {
            return response.status(400).json({message:"Erro ao criar instituto, algum campo está faltando"});
        }

        const institute: Institute = await this.createInstituteUseCase.execute(instituteDTO);

        if (institute !== null) return response.status(201).json(institute);
        return response.status(404).json({message:"Erro ao criar instituto"});
    }
}

export { CreateInstituteController };