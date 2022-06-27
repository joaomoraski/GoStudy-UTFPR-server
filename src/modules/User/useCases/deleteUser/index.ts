import { DeleteUserUseCase } from './DeleteUserUseCase';
import { DeleteUserController} from './DeleteUserController';
import { UserRepository } from '../../implementations/UserRepository';

const userRepository = new UserRepository();
const deleteUserUseCase = new DeleteUserUseCase(
    userRepository
);

const deleteUserController = new DeleteUserController(
    deleteUserUseCase
);

export { deleteUserUseCase, deleteUserController };