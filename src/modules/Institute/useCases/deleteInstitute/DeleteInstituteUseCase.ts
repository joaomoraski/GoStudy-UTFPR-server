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
            if (!institute) throw new Error("Null Exception");
            return institute;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
        
    }
}
export { DeleteInstituteUseCase };