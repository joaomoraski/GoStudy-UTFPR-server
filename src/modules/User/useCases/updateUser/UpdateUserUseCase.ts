import { User } from '../../../../entities/User';
import { IUserRepository } from '../../IUserRepository';

interface IUpdateUser {
    id: string;
    fk_id_institute?: string;
    name?: string;
    ra?: string;
    telephone?: string;
    email?: string;
    password?: string;
    isAdmin?: boolean;
}

class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute({
        id,
        fk_id_institute,
        name,
        ra,
        telephone,
        email,
        password,
        isAdmin
    }: IUpdateUser): Promise<User> {
        try {
            const user : User = await this.userRepository.findById(id);

            if (!user) {
                throw new Error('Usuário não existe');
            }

            user.fk_id_institute = fk_id_institute ? fk_id_institute : user.fk_id_institute;
            user.name = name ? name : user.name;
            user.ra = ra ? ra : user.ra;
            user.telephone = telephone ? telephone : user.telephone;
            user.email = email ? email : user.email;
            user.password = password ? password : user.password;
            user.isAdmin = isAdmin ? isAdmin : user.isAdmin;

            await this.userRepository.update(user);

            return user;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }
    }
}
export { UpdateUserUseCase };