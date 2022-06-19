import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class BrowseInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(query:string): Promise<Institute>{
        try {
            const institute:Institute = await this.instituteRepository.findById(query);
            return institute;
        } catch (error) {
            throw new Error('Instituto não existe');
        }

    }
}
export { BrowseInstituteUseCase };