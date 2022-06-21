import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';
import { IUserDTO } from '../UserDTO';

class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute( data: IUserDTO): Promise<User>{
        const user : User = new User(data);

        await this.userRepository.create(user);

        return user;
    }
}
export { CreateUserUseCase };