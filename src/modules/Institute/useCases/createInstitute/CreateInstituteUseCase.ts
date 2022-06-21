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
            if (!institute) throw new Error("Null Exception");
            return institute;
        } catch(error) {
            console.log((error as Error).message);
            return null;
        }
        
    }
}
export { CreateInstituteUseCase };