import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class DeleteInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(id: string): Promise<Institute>{
        const institute:Institute = await this.instituteRepository.findById(id);

        if(!institute) {
            throw new Error('Instituto não existe');
        }

        await this.instituteRepository.delete(institute);

        return institute;
    }
}
export { DeleteInstituteUseCase };