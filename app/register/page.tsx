"use client"
import Image from "next/image";
import logo from "@/public/ClearCO2_logo_black.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    userListSlice,
    useSelector,
    useDispatch,

    selectUserList,
} from "@/lib/redux";

export default function Register() {
    const dispatch = useDispatch();
    
    const [name, setName] = useState("");
    const [eMail, seteMail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState(Boolean);
    const [bday, setBday] = useState(new Date);
    const [errorMsg, setErrorMsg] = useState("");



    const router = useRouter();

    const data = {

        name: name,
        email: eMail,
        number: number,
        password: password,
        bday: bday,
        gender: gender
    };

    async function handleRegister() {

        dispatch(userListSlice.actions.register(data))
        router.push("/")
    }


    return (

        <div className="bg-yellow-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">

            <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-md">
                <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </div>
                <form className="p-2">
                    <div className=" grid gap-4 mb-6 p-10">

                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setName(e.target.value)}
                            placeholder=" Name"

                        />
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Number"


                        />

                        <select

                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setGender(true ? e.target.value == "Female" : false)}

                        >
                            <option value="">Gender</option>

                            <option value="Female">Female</option>
                            <option value="Male">Male</option>


                        </select>




                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setBday(new Date(e.target.value))}
                            placeholder="Date of Birth"

                        />

                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => seteMail(e.target.value)}
                            placeholder="E-Mail"


                        />
                       

                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"

                        />

                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4  text-white uppercase w-full rounded"

                            type="button"
                            onClick={handleRegister}

                        >
                            REGISTER
                        </button>

                        <div>
                            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
                        </div>
                        
                    </div>







                </form>



            </div>
        </div>


    );
}
