import { Request, Response } from 'express';
import { ShowInstituteUseCase } from './ShowInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class ShowInstituteController{
    constructor(
        private showInstituteUseCase: ShowInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const institute: Institute[] = await this.showInstituteUseCase.execute();

        return response.status(201).json(institute);
    }
}

export { ShowInstituteController };