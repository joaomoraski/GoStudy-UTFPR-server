/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { UserDB } from "../../../database/models/User";
import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {

    async create(user : User): Promise<User> {
        try {
            await UserDB.create({fk_id_institute: user.fk_id_institute, name: user.name, ra: user.ra, telephone: user.telephone, email: user.email, password: user.password, isAdmin: user.isAdmin});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async listAllUsers(): Promise<User[]> {
        const users: any[] = await UserDB.findAll();
        return users;
    }

    async findById(id: string): Promise<User> {
        const user : any = await UserDB.findByPk(id);
        return user;
    }

    async update(user : User): Promise<User> {
        await UserDB.update({fk_id_institute: user.fk_id_institute, name: user.name, ra: user.ra, telephone: user.telephone, email: user.email, password: user.password, isAdmin: user.isAdmin}, {where: {id: user.id}});
        return user;
    }

    async delete(user : User): Promise<User> {
        try {
            await UserDB.destroy({where: {id: user.id}});
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export { UserRepository };