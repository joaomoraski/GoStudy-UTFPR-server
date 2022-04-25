import { Request, Response } from 'express';
import { DeleteInstituteUseCase } from './DeleteInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class DeleteInstituteController{
    constructor(
        private deleteInstituteUseCase: DeleteInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id:string = request.body;

        const institute: Institute = await this.deleteInstituteUseCase.execute(id);

        return response.status(201).json(institute);
    }
}

export { DeleteInstituteController };