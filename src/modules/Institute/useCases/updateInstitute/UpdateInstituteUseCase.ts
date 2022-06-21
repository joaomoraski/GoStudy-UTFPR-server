import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

interface IUpdateInstitute {
    id:string;
    name?: string;
    city?: string;
    telephone?: string;
    openingTime?: string;
    closingTime?: string;
}

class UpdateInstituteUseCase {
    constructor(
        private instituteRepository: IInstituteRepository
    ) {}
    
    async execute({
        id,
        name,
        city,
        telephone,
        openingTime,
        closingTime
    }: IUpdateInstitute): Promise<Institute>{
        try {
            const institute:Institute = await this.instituteRepository.findById(id);

            institute.name = name ? name : institute.name;
            institute.city = city ? city : institute.city;
            institute.telephone = telephone ? telephone : institute.telephone;
            institute.openingTime = openingTime ? openingTime : institute.openingTime;
            institute.closingTime = closingTime ? closingTime : institute.closingTime;

            await this.instituteRepository.update(institute);
            return institute;
        } catch (error) {
            return null;
        }
        
    }
}
export { UpdateInstituteUseCase };