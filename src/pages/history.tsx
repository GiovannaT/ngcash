import { unstable_getServerSession } from "next-auth/next";
import { getSession, useSession } from "next-auth/react";
import { Menu } from "../components/Menu";
import { authOptions } from "./api/auth/[...nextauth]";

export default function History() {
  const { data: session, status } = useSession()

  return (
      <div className="flex text-ng-white">
        <Menu></Menu>
        <div className="flex">
          
        </div>
      </div>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if(!session){
    return {
       redirect:{
        destination: '/login',
        permanent: false,
       }
    }
  }

  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}