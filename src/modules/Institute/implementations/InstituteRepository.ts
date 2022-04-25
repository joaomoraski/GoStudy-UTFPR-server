import { Institute } from "../../../entities/Institute";
import { IInstituteRepository } from "../IInstituteRepository";

// Apagar aqui
const name = 'UTFPR';
const city = 'Campo Mourão';
const telephone = '999999999';
const opening_time = '08:24';
const closing_time = '12:45';

class InstituteRepository implements IInstituteRepository {

    async create(institute: Institute):Promise<Institute>{
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return institute;
    }

    async listAllInstitutes(): Promise<Institute[]>{
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const institute:Institute = Institute.create(name,city,telephone,opening_time,closing_time);
        const institutes: Institute[] = [institute];
        return institutes;
    }

    async findById(id: string): Promise<Institute>{
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const institute:Institute = Institute.create(id,name,city,telephone,opening_time,closing_time);
        return institute;
    }

    async update(institute: Institute): Promise<Institute>{
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return institute;
    }

    async delete(institute: Institute): Promise<Institute>{
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return institute;
    }
}

export { InstituteRepository };