import { BrowseInstituteUseCase } from './BrowseInstituteUseCase';
import { BrowseInstituteController} from './BrowseInstituteController';
import { InstituteRepository } from '../../implementations/InstituteRepository';

const instituteRepository = new InstituteRepository();
const browseInstituteUseCase = new BrowseInstituteUseCase(
    instituteRepository
);

const browseInstituteController = new BrowseInstituteController(
    browseInstituteUseCase
);

export { browseInstituteUseCase, browseInstituteController };