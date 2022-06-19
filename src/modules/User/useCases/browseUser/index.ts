import { BrowseUserUseCase } from './BrowseUserUseCase';
import { BrowseUserController} from './BrowseUserController';
import { UserRepository } from '../../implementations/UserRepository';

const userRepository = new UserRepository();
const browseUserUseCase = new BrowseUserUseCase(
    userRepository
);

const browseUserController = new BrowseUserController(
    browseUserUseCase
);

export { browseUserUseCase, browseUserController };