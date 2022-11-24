import { Menu } from "../components/Menu";
import { useForm } from "react-hook-form";
import { getSession, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]"

import { Balance } from "../components/Balance";
import { unstable_getServerSession } from "next-auth/next";

export default function Operate() {
  const { data: session, status } = useSession()

  const { register, handleSubmit} = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
        <div className="flex text-ng-white">
          <Menu></Menu>
          <div className="py-10 px-20 flex flex-col w-screen">
            <h1 className="font-blinker font-bold text-2xl mb-5">
              Here you can transfer you n-cash
            </h1>
            <div className="flex flex-col items-center">
              <Balance></Balance>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex justify-center w-max h-36 m-5 p-6 rounded-sm">
                  <div className="bg-ng-gray-400 h-36 w-3/5 my-5 p-6 ">
                    <label className="text-xl" htmlFor="username">
                      To whom do you want to transfer?
                    </label>
                    <input
                      {...register("username", { required: true })}
                      className="bg-ng-gray-400 border-b border-ng-white my-5 w-64"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Here goes the username"
                    />
                  </div>
                  <div className="bg-ng-gray-200 w-24 my-5 h-36 rounded-r-sm flex items-center justify-center">
                    <p className="font-blinker text-xl">1</p>
                  </div>
                </div>
                <div className="flex justify-center w-max h-36 m-5 p-6 rounded-sm">
                  <div className="bg-ng-gray-400 h-36 w-3/5 my-5 p-6 ">
                    <label className="text-xl" htmlFor="username">
                      How much do you want to transfer?
                    </label>
                    <input
                      {...register("transference", { required: true })}
                      className="bg-ng-gray-400 border-b border-ng-white my-5 w-64"
                      type="number"
                      name="transference"
                      id="transference"
                      required
                      step=".01"
                      placeholder="Type in the amount"
                    />
                  </div>
                  <div className="bg-ng-gray-200 w-24 my-5 h-36 rounded-r-sm flex items-center justify-center">
                    <p className="font-blinker text-xl">2</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-ng-pink font-blinker font-bold text-xl rounded-full p-5"
                >
                  Transfer
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
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