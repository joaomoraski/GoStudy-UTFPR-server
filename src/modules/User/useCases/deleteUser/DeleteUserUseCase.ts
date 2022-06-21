import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

class DeleteUserUseCase {
    constructor(
        private userRepository : IUserRepository
    ) {}
    
    async execute(id: string): Promise<User>{
        const user : User = await this.userRepository.findById(id);

        if(!user) {
            throw new Error('Usuário não existe');
        }

        await this.userRepository.delete(user);

        return user;
    }
}
export { DeleteUserUseCase };