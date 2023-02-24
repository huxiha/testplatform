import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
// import { prisma } from "@/lib/client";
export const authOptions = {

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      
      async authorize(credentials, req) {
        const prisma = new PrismaClient();
        const user = await prisma.User.findUnique({
            where: {
                name: credentials.name,
            }
        })
        if(user.length === 0) {
            throw new Error("no user found, please sign up");
        }
        if(credentials.password !== user.password){
            throw new Error("password discorrect!");
        }
        await prisma.$disconnect();
        return user;
      }
      


    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user}) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      } 
      return session; 
    },
  },
  jwt: {
    secret: "test",
    encryption: true,
  }
}
export default NextAuth(authOptions)