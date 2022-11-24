import { getSession, useSession } from "next-auth/react";
import { Navbar } from "../components/Navbar/navbar";

export default function History() {
  const { data: session, status } = useSession();
  console.log("dados da sessão:", session);

  if (status === "authenticated") {
    return (
      <div className="flex text-ng-white">
        <Navbar></Navbar>
        <div className="flex">
          {session.user?.email}
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
