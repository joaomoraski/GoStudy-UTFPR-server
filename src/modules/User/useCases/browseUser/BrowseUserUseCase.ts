import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

class BrowseUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(query:string): Promise<User>{
        try {
            const user:User = await this.userRepository.findById(query);
            if (!user) throw new Error('Usuário não existe');
            return user;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseUserUseCase };