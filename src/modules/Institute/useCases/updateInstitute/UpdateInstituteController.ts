import { Request, Response } from 'express';
import { UpdateInstituteUseCase } from './UpdateInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class UpdateInstituteController{
    constructor(
        private updateInstituteUseCase: UpdateInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, city, telephone, openingTime, closingTime } = request.body;
        const id = request.params.id;
        const institute:Institute = await this.updateInstituteUseCase.execute({
            id,
            name,
            city,
            telephone,
            openingTime,
            closingTime
        });

        if (institute !== null) return response.status(200).json(institute);
        return response.status(404).json({message:"Falha ao atualizar o instituto"});
    }
}

export { UpdateInstituteController };