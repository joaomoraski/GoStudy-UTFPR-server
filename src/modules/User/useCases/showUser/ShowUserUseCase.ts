import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

class ShowUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(): Promise<User[]>{
        const user : User[] = await this.userRepository.listAllUsers();

        if(!user) {
            throw new Error('Usuário não existe');
        }

        return user;
    }
}
export { ShowUserUseCase };