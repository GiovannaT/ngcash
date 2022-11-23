import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session, status} = useSession()
  console.log(session);



  if(status === "loading") return <p>Loading</p>
  if(status === "unauthenticated") return <p>Acess Denied</p>
  if(typeof window === "undefined") return null

  if(session){
      return (
      <div className="flex text-ng-white">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">{session.user?.name}</h1>
        <Balance></Balance>
      </div>
    </div>
  );
  }
}
