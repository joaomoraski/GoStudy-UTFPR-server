import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class DeleteInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(id: string): Promise<Institute>{
        try {
            const institute:Institute = await this.instituteRepository.findById(id);
            await this.instituteRepository.delete(institute);
            return institute;
        } catch (error) {
            return null;
        }
        
    }
}
export { DeleteInstituteUseCase };