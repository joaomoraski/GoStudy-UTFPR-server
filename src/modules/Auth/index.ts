/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AuthController} from './AuthController';
import { UserRepository } from '../User/implementations/UserRepository';

const auth = new UserRepository();

const authController = new AuthController(
    auth
);

export { authController };