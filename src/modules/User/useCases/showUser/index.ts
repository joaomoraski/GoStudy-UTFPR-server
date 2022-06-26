import { ShowUserUseCase } from './ShowUserUseCase';
import { ShowUserController} from './ShowUserController';
import { UserRepository } from '../../implementations/UserRepository';

const userRepository = new UserRepository();
const showUserUseCase = new ShowUserUseCase(
    userRepository
);

const showUserController = new ShowUserController(
    showUserUseCase
);

export { showUserUseCase, showUserController };