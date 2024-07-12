import { ISODateString, NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { randomBytes, randomUUID } from "crypto";
import { MongoClient } from "mongodb";
import { use } from "react";


// https://next-auth.js.org/configuration/options
export const authConfig: NextAuthOptions = {
  adapter: MongoDBAdapter(
    MongoClient.connect(process.env.MONGODB_URI),
  ) as import("next-auth/adapters").Adapter,
 
  providers: [
    GoogleProvider({

      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ session, user, token }) {
      session.user.role = "ROLE_USER";
      // console.log(session)
      session.user._id = user._id;
      session.user.nivelPerfil = user.nivelPerfil
      // console.log(user)
      ///todo parametro que se le pase a session, se le pasa a la sesion del usuario


      return session;
    }
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}
