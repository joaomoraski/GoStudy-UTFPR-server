/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Institute } from "../../../entities/Institute";
import { IInstituteRepository } from "../IInstituteRepository";
import { InstituteDB } from "../../../database/models/Institute";

class InstituteRepository implements IInstituteRepository {

    async create(institute: Institute):Promise<Institute>{
        try{
            await InstituteDB.create({name: institute.name, city: institute.city, telephone: institute.telephone, openingTime: institute.openingTime, closingTime: institute.closingTime});
            return institute;
        } catch(err){
            throw new Error(err);
        }
    }

    async listAllInstitutes(): Promise<Institute[]>{
        const institutes: any[] = await InstituteDB.findAll();
        return institutes;
    }

    async findById(id: string): Promise<Institute>{
        const institutes: any = await InstituteDB.findByPk(id);
        return institutes;
    }

    async update(institute: Institute): Promise<Institute>{
        await InstituteDB.update({name: institute.name, city: institute.city, telephone: institute.telephone, openingTime: institute.openingTime, closingTime: institute.closingTime},{where: {id: institute.id}});
        return institute;
    }

    async delete(institute: Institute): Promise<Institute>{
        try{
            await InstituteDB.destroy({where: {id: institute.id}});
            return institute;
        } catch(err){
            throw new Error(err);
        }
    }
}

export { InstituteRepository };