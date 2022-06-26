import { Request, Response } from 'express';
import { DeleteInstituteUseCase } from './DeleteInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class DeleteInstituteController{
    constructor(
        private deleteInstituteUseCase: DeleteInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const id = request.params.id;
        const institute: Institute = await this.deleteInstituteUseCase.execute(id);

        if (institute !== null) return response.status(200).json(institute);
        return response.status(404).json({message:"Instituto não encontrado"});
    }
}

export { DeleteInstituteController };