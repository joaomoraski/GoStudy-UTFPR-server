/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../modules/User/implementations/UserRepository'

export function onlyAdmin() {
    return async (request: Request, response: Response, next: NextFunction) => {
        const id: string= request.body.tokenId;
        const userRepo = new UserRepository();
        const user = await userRepo.findById(id);
        if (!user.isAdmin) {
            return response.status(401).json({ message: 'Acesso negado' });
        }
        next();
    };
}
