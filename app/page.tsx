"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import {
  useSelector,
  useDispatch,
  selectUserList,
  busListSlice,
  userListSlice,
} from "@/lib/redux";

export default function Home() {

  const dispatch = useDispatch();
  const userList = useSelector(selectUserList);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [eMail, seteMail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const data = {
    email: eMail,
    password: password,
  };


  async function handleLogin() {
    try {
      const user = userList.users.find(user => user.email === data.email && user.password === data.password);
      if (user) {
        dispatch(userListSlice.actions.login(user))
        router.push("/mainPage");

      } else {
        setErrorMsg("Kullanıcı Adı veya Parola Hatalı");
      }

    } catch (e) {
      console.log("Bir Hata Oluştu");
    }
  }


  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }


  let icon = isPasswordVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  return (

    <div className="bg-yellow-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">

      <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
        <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </div>

        <form className="p-12 md:p-24">
          <div className="mb-4">

            <input
              type="eMail"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => seteMail(e.target.value)}
              placeholder="E-Mail"

            />
          </div>

          <div className="relative w-1/1 container ">
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"

            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={togglePasswordVisibility}
              type="button"
            >
              {icon}
            </button>
          </div>
          <Link
            href="/forgetPassword"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button
              className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
              onClick={handleLogin}
              type="button" >
              LOGIN
            </button>
          </div>

          <p className="mt-4 text-sm text-center text-gray-700">
            Dont have an account?{" "}

            <Link
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
            <div>
              {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            </div>

          </p>
        </form>

      </div>
    </div >





  )
}

