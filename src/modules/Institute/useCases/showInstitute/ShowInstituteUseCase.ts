import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

class ShowInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(): Promise<Institute[]>{
        const institute:Institute[] = await this.instituteRepository.listAllInstitutes();

        if(!institute) {
            throw new Error('Instituto não existe');
        }

        return institute;
    }
}
export { ShowInstituteUseCase };