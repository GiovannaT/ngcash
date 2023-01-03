import ReactModal from "react-modal";
import { useState } from "react";
import { Navbar } from "../components/Navbar/navbar";
import { getSession, useSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default function Config() {
  const { data: session, status } = useSession();

  const [modalIsOpen, setIsOpen] = useState(false);

  const userSession = getSession();
  console.log("userSession on config: ", userSession);

  function openModal() {
    setIsOpen(true);
    console.log("deve abrir modal");
  }

  function closeModal() {
    setIsOpen(false);
    console.log("deve fechar modal");
  }

  return (
    <>
      <div className="flex text-ng-white relative">
        <Navbar></Navbar>
        <div className="flex flex-col items-center w-screen ">
          <div className="bg-ng-gray-400 rounded-md m-10 px-10 py-5 max-w-sm border border-ng-red">
            <div>
              <h2 className="text-ng-red">Danger zone</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-ng-red"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
            <p>{session?.user?.email}, do you want to exclude your account?</p>
            <button className="bg-ng-red p-1" onClick={openModal}>
              open popup
            </button>
          </div>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="teste label"
          overlayClassName="modal-overlay"
          className="modal-content flex flex-col border p-5 rounded-md w-96 top-0 bg-ng-gray-400 border-ng-red absolute text-ng-white items-center"
        >
          <div className="flex flex-row justify-between">
            <h1 className="text-white font-blinker font-bold text-xl">
              Be aware of your actions
            </h1>
            <button onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="font-blinker font">
            This will exclude your user and your account, you will not be
            allowed to enter the ng-cash platform with the same credentials, and
            you will loose all credits in your balance.
          </p>
          <p className="text-xs font-montserrat">
            This action will not exclude transactions. All transferences will
            remain intact.
          </p>

          <button className="bg-ng-red p-2 font-blinker rounded-sm text-ng-white font-bold">
            Do it
          </button>
        </ReactModal>
      </div>
    </>
  );
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