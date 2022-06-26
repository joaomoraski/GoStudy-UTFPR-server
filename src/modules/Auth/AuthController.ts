import { Request, Response } from 'express'
import { User } from '../../entities/User'
import { IUserRepository } from '../User/IUserRepository'
import { sign } from 'jsonwebtoken'

class AuthController {
    constructor(
        private userRepository: IUserRepository
    ) { }
    async authenticate(req: Request, res: Response) {
        try {
            const { ra, password } = req.body;

            const user:User = await this.userRepository.findByRA(ra);
            if(!user){
                return res.status(401).send(
                    {message: 'RA inválido'}
                );
            }

            const validPass = password === user.password;

            if (!validPass){
                return res.status(401).send(
                    {message: 'Senha inválida'}
                );
            }
            const secret = process.env.SECRET;
            const token = sign({ id: user.id }, secret, {noTimestamp:true, expiresIn: '1d' });

            return res.json({
                user,
                token
            })
        } catch (error) {
            console.log((error as Error).message);
            return res.send("Internal Error");
        }
        
    }
}

export { AuthController };