import { Request, Response } from 'express';
import { ShowInstituteUseCase } from './ShowInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class ShowInstituteController{
    constructor(
        private showInstituteUseCase: ShowInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const institute: Institute[] = await this.showInstituteUseCase.execute();

        if (institute !== null) return response.status(200).json(institute);
        return response.status(404).json({message:"Erro ao buscar institutos"});
    }
}

export { ShowInstituteController };