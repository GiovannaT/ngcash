import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    Credentials({
      name: "NextAuthCredentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
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
        if (dbUser) {
          console.log(dbUser);
          if (dbUser.password == credentials.password) {
            return dbUser;
          }
        }
        return null;
      },
    }),
  ],
  secret: "teste",
  jwt: {
    secret: "testejwt",
    encryption: true,
  },
};
export default NextAuth(authOptions);
