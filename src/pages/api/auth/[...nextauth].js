import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions = {
  session:{
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      id: 'credentials',
      name: 'NextAuthCredentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        //this is the callback function
        //it will execute once the user is to be authorized
        //if is authorized, this function will store the user token inside the cookies
        const dbUser = await prisma.users.findUnique({
          where: {
            username: credentials.username,
          },
        });
        //check user existance
        if(!dbUser){
          throw new Error("NO user found. Please Sign Up")
        }
        //compare passwords
        if (dbUser) {
          console.log("dbUser: ",dbUser);
          if (dbUser.password == credentials.password) {
            return dbUser;
          }
        }        
        return dbUser;
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  secret: "teste",
  adapter: PrismaAdapter(prisma),
  jwt: {
    maxAge: 60 * 60 * 24,
    secret: "testejwt",
    encryption: true,
  },
};
export default NextAuth(authOptions);
