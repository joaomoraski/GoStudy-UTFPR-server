import { Institute } from "../../entities/Institute";

interface IInstituteRepository {
    create(institute: Institute): Promise<Institute>;
    listAllInstitutes(): Promise<Institute[]>;
    findById(id: string): Promise<Institute>;
    update(institute: Institute): Promise<Institute>;
    delete(institute: Institute): Promise<Institute>;
}

export { IInstituteRepository };