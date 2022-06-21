import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

class BrowseUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(query:string): Promise<User>{
        try {
            const user:User = await this.userRepository.findById(query);
            return user;
        } catch (error) {
            throw new Error('Usuário não existe');
        }

    }
}
export { BrowseUserUseCase };