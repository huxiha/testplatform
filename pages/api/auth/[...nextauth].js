import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
export const authOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      async authorize(credentials, req) {
        // const prisma = new PrismaClient();

        // const user = await prisma.User.findUnique({
        //     where: {
        //         name: credentials.name,
        //     }
        // })
        
        // console.log(credentials);
        const options = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                userAccount: credentials.name,
                userPasswd: credentials.passwd,
            })
          };
        const res = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/userLogin", options);
        const data= await res.json();
        // if(data.Code != 200) {
        //     throw new Error(data.Msg);
        // }
        const user = {
            account: data.Data.userAccount,
            name: data.Data.userName,
        };


        // if(user.code != 200) {
        //     throw new Error(user.Msg);
        // }

        // if(!user) {
        //     // await prisma.$disconnect();
        //     throw new Error("no user found, please sign up");
        // }

        // const checkpassword = await compare(credentials.password, user.password);
        // if(!checkpassword){
        //     await prisma.$disconnect();
        //     throw new Error("password discorrect!");
        // }
        // await prisma.$disconnect();
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
        token.id = user.account;
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