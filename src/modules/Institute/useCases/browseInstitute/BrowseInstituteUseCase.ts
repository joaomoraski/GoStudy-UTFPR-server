import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class BrowseInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(query:string): Promise<Institute>{
        try {
            const institute:Institute = await this.instituteRepository.findById(query);
            if (!institute) throw new Error("Not Found Exception");
            return institute;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseInstituteUseCase };