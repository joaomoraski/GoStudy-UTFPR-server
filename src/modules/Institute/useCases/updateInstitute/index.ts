import { UpdateInstituteUseCase } from './UpdateInstituteUseCase';
import { UpdateInstituteController} from './UpdateInstituteController';
import { InstituteRepository } from '../../implementations/InstituteRepository';

const instituteRepository = new InstituteRepository();
const updateInstituteUseCase = new UpdateInstituteUseCase(
    instituteRepository
);

const updateInstituteController = new UpdateInstituteController(
    updateInstituteUseCase
);

export { updateInstituteUseCase, updateInstituteController };