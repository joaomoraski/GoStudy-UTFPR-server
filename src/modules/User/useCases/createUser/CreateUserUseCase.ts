import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';
import { IUserDTO } from '../UserDTO';

class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute( data: IUserDTO): Promise<User>{
        try {
            const user : User = new User(data);

            await this.userRepository.create(user);
            if (!user) throw new Error('Null Exception');
            return user;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { CreateUserUseCase };