import { DeleteInstituteUseCase } from './DeleteInstituteUseCase';
import { DeleteInstituteController} from './DeleteInstituteController';
import { InstituteRepository } from '../../implementations/InstituteRepository';

const instituteRepository = new InstituteRepository();
const deleteInstituteUseCase = new DeleteInstituteUseCase(
    instituteRepository
);

const deleteInstituteController = new DeleteInstituteController(
    deleteInstituteUseCase
);

export { deleteInstituteUseCase, deleteInstituteController };