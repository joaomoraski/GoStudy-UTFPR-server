import { ShowInstituteUseCase } from './ShowInstituteUseCase';
import { ShowInstituteController} from './ShowInstituteController';
import { InstituteRepository } from '../../implementations/InstituteRepository';

const instituteRepository = new InstituteRepository();
const showInstituteUseCase = new ShowInstituteUseCase(
    instituteRepository
);

const showInstituteController = new ShowInstituteController(
    showInstituteUseCase
);

export { showInstituteUseCase, showInstituteController };