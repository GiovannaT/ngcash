import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession, useSession } from "next-auth/react";

import { Balance } from "../components/Balance";
import { Navbar } from "../components/Navbar/navbar";

export default async function Home() {
  const { data: session, status } = useSession();
  console.log("dados da sessão:", session);

  const userSession = getSession();

  if (status==="authenticated") {
    console.log(status)
    return (
      <div className="flex text-ng-white">
        <Navbar></Navbar>
        <div className="py-10 px-20 w-screen">
          <h1 className="font-blinker font-bold text-2xl mb-5">
            {session.user?.email}
          </h1>
          <Balance></Balance>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse,){
  const sessionUser = await getSession({req})

  if(!sessionUser){
    return{
      redirect:{
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: sessionUser,
  }
  
}

// export async function handleUser(req: NextApiRequest, res: NextApiResponse){
  
//   const prisma = new PrismaClient();

//   const user = await prisma.users.findUnique({
//     where: {
//       email
//     }
//   });
//   console.log(user);

// }