"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import data from '../busTrips.json' assert { type: 'json' };import {
    busListSlice,
    useDispatch,
} from "@/lib/redux";

export default function MainPage() {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState("");
    
    const dispatch = useDispatch();

    const router = useRouter();

    const handleSearch = () => {
        data.forEach(datum => {
            dispatch(busListSlice.actions.add(datum))
        });
        router.push('/inquiryPage?departure='+departure+"&arrival="+arrival+"&date="+departureDate);
    };
   

        return (
            
            <div className="bg-yellow-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-md">
                    <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-3">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-6">Sefer Ara</h1>
                    <div className="p-8">
                        <label className="block text-gray-700 text-sm font-bold mt-2 ">Kalkış Yeri</label>
                        <select
                            id="select"
                            className="w-full text-gray-600 p-2 border border-gray-300 mt-2  rounded focus:outline-none focus:border-blue-500"
                            onChange={(e) => setDeparture(e.target.value)}
                        >
                            <option value="Kalkış Yeri">Seçiniz</option>
                            <option value="Ankara">Ankara</option>
                            <option value="Antalya">Antalya</option>
                            <option value="Balıkesir">Balıkesir</option>
                            <option value="Bolu">Bolu</option>
                            <option value="Trabzon">Trabzon</option>
                            <option value="Istanbul">İstanbul</option>
                            <option value="Izmir">İzmir</option>
                            <option value="Ordu">Ordu</option>
                        </select>


                        <label className="block text-gray-700 text-sm font-bold mt-2 ">Varış Yeri</label>
                        <select
                            className="w-full p-2 mt-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:border-blue-500"

                            onChange={(e) => setArrival(e.target.value)}
                        >
                            <option value="Varış Noktası">Seçiniz</option>
                            <option value="Ankara">Ankara</option>
                            <option value="Antalya">Antalya</option>
                            <option value="Balıkesir">Balıkesir</option>
                            <option value="Bolu">Bolu</option>
                            <option value="Trabzon">Trabzon</option>
                            <option value="Istanbul">İstanbul</option>
                            <option value="Izmir">İzmir</option>
                            <option value="Ordu">Ordu</option>

                        </select>

                        <label className="block text-gray-700 text-sm font-bold mt-2 ">Sefer Tarihi</label>
                        <input
                            type="date"
                            className="w-full p-2  mt-2 border text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />


                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 mt-4  text-white uppercase w-full rounded"
                            onClick={handleSearch}

                        >
                            Sefer Bul
                        </button>
                    </div>

                </div>
            </div>



        );
    };




