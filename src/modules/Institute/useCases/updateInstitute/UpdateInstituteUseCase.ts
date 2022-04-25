import { Institute } from '../../../../entities/Institute';
import { IInstituteRepository } from '../../IInstituteRepository';

interface IUpdateInstitute {
    id:string;
    name?: string;
    city?: string;
    telephone?: string;
    opening_time?: string;
    closing_time?: string;
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
        opening_time,
        closing_time
    }: IUpdateInstitute): Promise<Institute>{
        const institute:Institute = await this.instituteRepository.findById(id);

        if(!institute) {
            throw new Error('Instituto não existe');
        }

        institute.name = name ? name : institute.name;
        institute.city = city ? city : institute.city;
        institute.telephone = telephone ? telephone : institute.telephone;
        institute.opening_time = opening_time ? opening_time : institute.opening_time;
        institute.closing_time = closing_time ? closing_time : institute.closing_time;

        await this.instituteRepository.update(institute);

        return institute;
    }
}
export { UpdateInstituteUseCase };