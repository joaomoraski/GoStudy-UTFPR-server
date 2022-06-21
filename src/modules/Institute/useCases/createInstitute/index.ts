import { CreateInstituteUseCase } from './CreateInstituteUseCase';
import { CreateInstituteController} from './CreateInstituteController';
import { InstituteRepository } from '../../implementations/InstituteRepository';

const instituteRepository = new InstituteRepository();
const createInstituteUseCase = new CreateInstituteUseCase(
    instituteRepository
);

const createInstituteController = new CreateInstituteController(
    createInstituteUseCase
);

export { createInstituteUseCase, createInstituteController };