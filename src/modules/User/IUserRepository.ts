import { User } from "../../entities/User";

interface IUserRepository {
    create(User: User): Promise<User>;
    listAllUsers(): Promise<User[]>;
    findById(id: string): Promise<User>;
    update(User: User): Promise<User>;
    delete(User: User): Promise<User>;
}

export { IUserRepository };