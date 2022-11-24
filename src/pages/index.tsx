import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Home() {
  const {data: session, status} = useSession()
  console.log(session);

  if(session){
      return (
      <div className="flex text-ng-white">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">{session.user?.email}</h1>
        <Balance></Balance>
      </div>
    </div>
  );
  }
}

export const getServerSideProps: GetServerSideProps= async (context) => {
  const session = await getSession(context);

  if(!session){
    return {
       redirect:{
        destination: '/login',
        permanent: false,
       }
    }
  }

  return{
    props:{
      session
    }
  }

}
