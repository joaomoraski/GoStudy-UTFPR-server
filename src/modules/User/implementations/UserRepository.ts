import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";

// Apagar aqui
const fk_id_institute = '1';
const name = 'User';
const ra = '1234567';
const telephone = '(44) 99988-7766';
const email = 'email@email.com';
const password = 'pass';
const isAdmin = true;

class UserRepository implements IUserRepository {

    async create(user : User): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return user;
    }

    async listAllUsers(): Promise<User[]> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const user : User = User.create(fk_id_institute, name, ra, telephone, email, password, isAdmin);
        const users: User[] = [user];
        return users;
    }

    async findById(id: string): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        const user : User = User.create(fk_id_institute, name, ra, telephone, email, password, isAdmin, id);
        return user;
    }

    async update(user : User): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return user;
    }

    async delete(user : User): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 2000)); // GAMBIARRA
        return user;
    }
}

export { UserRepository };