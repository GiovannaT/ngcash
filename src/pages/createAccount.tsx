import Image from "next/image";
import Link from "next/link";

import { useForm } from 'react-hook-form'

export default function CreateAccount() {
  const { register, handleSubmit, formState:{errors}} = useForm({mode:'onTouched'})

  const onSubmit = (data: any) => {
    try {
      createUser(data);
    } catch (error) {
      console.log(error)
    }
  }

  async function createUser( data: FormData) {
    try {
      fetch('http://localhost:3000/api/post/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        },
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-end">
      <div className="bg-ng-white h-screen w-2/3">
        <div className="m-10 flex flex-col items-center">
          <Image src="/logo-preta.png" width={58} height={58} alt="Ng logo" />
          <h1 className="font-blinker font-bold text-ng-gray-300 uppercase text-2xl m-5">
            Create your account
          </h1>
          <div className="text-sm m-5">
            <p className="text-ng-gray-400">
              Already a member?
              <Link className="text-ng-pink" href="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex border-b border-ng-gray-400 py-1">
              <input
              {...register("username", { required: true }) }
                className="border-transparent focus:border-none focus:outline-none bg-ng-white"
                name="username"
                id="username"
                type="text"
                required
                placeholder="Username"
                minLength={3}
              />{errors.username && errors.username.type === "required"}
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
              {...register("email", { required: true })}
                className="border-transparent focus:border-none focus:outline-none bg-ng-white"
                name="email"
                type="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Email"
              />{errors.email && errors.email.type === "required"}
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
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <div className="flex border-b border-ng-gray-400 py-1">
              <input
              {...register("password", { required: true, pattern:{
                value: /(?=.*?[A-Z])(?=.*?[0-9])/,
                message:'Password must have one uppercase letter and at least one numerical character'
            },
            minLength:{
                value:8,
                message:'Password minimum required length is 8 characters'
            }, })}
                className="bg-ng-white rounded border-transparent focus:border-none focus:outline-none"
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
            <button type="submit"
            className="w-full font-bold font-blinker text-ng-gray-400 uppercase bg-ng-pink rounded-full my-2 p-3">
              Create your account
            </button>
          </form>
          {errors.password && <span className="text-sm">{errors.password.message}</span>}
        </div>
      </div>
    </div>
  );
}
