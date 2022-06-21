import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';
import { IInstituteDTO } from '../InstituteDTO'

class CreateInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute(data:IInstituteDTO): Promise<Institute>{
        try {
            const institute: Institute = new Institute(data);
            await this.instituteRepository.create(institute);
    
            return institute;
        } catch(error) {
            return null;
        }
        
    }
}
export { CreateInstituteUseCase };