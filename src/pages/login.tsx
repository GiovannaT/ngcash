import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-end">
      <div className="bg-ng-white h-screen w-2/3">
        <div className="m-10 flex flex-col items-center">
          <Image src="/logo-preta.png" width={58} height={58} alt="Ng logo" />
          <h1 className="font-blinker font-bold text-ng-gray-400 text-2xl m-5">
            Login
          </h1>
          <div className="text-sm m-5">
            <p className="text-ng-gray-400">
              Not a member?
              <a className="text-ng-green" href="/createAccount">
                Create your account
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <form className="">
            <div className="flex border-b border-ng-gray-400 py-1">
              <input
                className="bg-ng-white"
                name="username"
                type="text"
                id="username"
                required
                placeholder="Username"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 stroke-ng-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="flex border-b border-ng-gray-400 py-1">
              <input
                className="bg-ng-white rounded"
                name="password"
                type="password"
                id="password"
                required
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 stroke-ng-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <button className="w-full font-bold font-blinker text-ng-gray-400 uppercase bg-ng-green rounded-full my-2 p-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
