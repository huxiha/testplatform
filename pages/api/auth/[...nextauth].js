import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
export const authOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      async authorize(credentials, req) {
        const prisma = new PrismaClient();
        const user = await prisma.User.findUnique({
            where: {
                name: credentials.name,
            }
        })
        if(!user) {
            await prisma.$disconnect();
            throw new Error("no user found, please sign up");
        }

        const checkpassword = await compare(credentials.password, user.password);
        if(!checkpassword){
            await prisma.$disconnect();
            throw new Error("password discorrect!");
        }
        await prisma.$disconnect();
        return user;
      }
      


    })
  ],
  secret:"Y2YUWE5MIfl6U03jN3ZJkHaedbh7xCGMW301o2DB6LU=",
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