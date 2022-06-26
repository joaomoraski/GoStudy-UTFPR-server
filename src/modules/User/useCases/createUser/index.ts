import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController} from './CreateUserController';
import { UserRepository } from '../../implementations/UserRepository';

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(
    userRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController };