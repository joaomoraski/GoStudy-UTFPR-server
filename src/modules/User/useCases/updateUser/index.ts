/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { UpdateUserController} from './UpdateUserController';
import { UserRepository } from '../../implementations/UserRepository';

const userRepository = new UserRepository();
const updateUserUseCase = new UpdateUserUseCase(
    userRepository
);

const updateUserController = new UpdateUserController(
    updateUserUseCase
);

export { updateUserUseCase, updateUserController };