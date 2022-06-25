/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../modules/User/implementations/UserRepository'

export function verifyUser() {
    return async (request: Request, response: Response, next: NextFunction) => {
        const idToken: string = request.body.tokenId;
        const idReq:string = request.params.id;
        const userRepo = new UserRepository();
        const user = await userRepo.findById(idToken);
        if (idToken !== idReq && user.isAdmin === false) {
            return response.status(401).json({ message: 'Acesso negado' });
        }
        next();
    };
}
