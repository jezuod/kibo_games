// ./types/nextauth.d.ts
import NextAuth, { DefaultSession } from 'next-auth';
import { IUser } from './user';

declare module 'next-auth' {
    interface Session {
        user: {
            role: string | null;
            nivelPerfil: number;
        } & DefaultSession['user'] & IUser;
    }

    
}

declare module 'next-auth/adapters' {
    interface AdapterUser extends IUser {
        _id: string;
        nivelPerfil: number;

        roles : string[] | null;
    }
}

