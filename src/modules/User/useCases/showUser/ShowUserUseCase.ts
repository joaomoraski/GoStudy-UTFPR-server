import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

class ShowUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(): Promise<User[]>{
        try {
            const user : User[] = await this.userRepository.listAllUsers();
            return user;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { ShowUserUseCase };