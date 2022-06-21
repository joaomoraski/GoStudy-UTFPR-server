import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class ShowInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(): Promise<Institute[]>{
        try {
            const institute:Institute[] = await this.instituteRepository.listAllInstitutes();
            return institute;
        } catch (error) {
            return null;
        }
    }
}
export { ShowInstituteUseCase };