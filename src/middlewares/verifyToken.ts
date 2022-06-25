/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NextFunction, Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

export function verifyToken() {
    return (request: Request, response: Response, next: NextFunction) => {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            response.status(401).json({ message: 'Token não encontrado' });
        } else {
            try {
                const secret = process.env.SECRET;
                const payload = verify(authHeader, secret) as JwtPayload;
                const id: string = payload.id;
                request.body.tokenId = id;
                return next();
            } catch (err) {
                return response.status(401).json({ message: 'Token inválido' });
            }
        }
    };
}
