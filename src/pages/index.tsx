import { Balance } from "../components/Balance";
import { getSession, useSession } from "next-auth/react";
import { Navbar } from "../components/Navbar/navbar";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("dados da sessão:", session);

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

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(!session){
    return{
      redirect:{
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: session
  }
  
}
