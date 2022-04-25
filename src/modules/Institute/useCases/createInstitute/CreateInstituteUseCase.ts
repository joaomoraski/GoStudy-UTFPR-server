import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';
import { IInstituteDTO } from '../InstituteDTO'

class CreateInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute( data:IInstituteDTO): Promise<Institute>{
        const institute: Institute = new Institute(data);

        await this.instituteRepository.create(institute);

        return institute;
    }
}
export { CreateInstituteUseCase };