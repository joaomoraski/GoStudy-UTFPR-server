import { AuthController} from './AuthController';
import { UserRepository } from '../User/implementations/UserRepository';

const auth = new UserRepository();

const authController = new AuthController(
    auth
);

export { authController };