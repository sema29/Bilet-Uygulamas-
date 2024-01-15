"use client"
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import data from '../busTrips.json' assert { type: 'json' };
import { useRouter, useSearchParams } from 'next/navigation';
import {
    busListSlice,
    useSelector,
    useDispatch,
  
    selectBusList,
  } from "@/lib/redux";


const Inquiry = () => {
    const dispatch = useDispatch();
    const busList = useSelector(selectBusList);

    const router = useRouter();
    const searchParams = useSearchParams()
    const searchDeparture = searchParams.get('departure')
    const searchArrival = searchParams.get('arrival')
    const searchDate =   searchParams.get('date');

    

    const handleInspect = (tripId: number) => {
        const bus = busList.buses.find(bus => bus.id === tripId);
        if (bus) {
            dispatch(busListSlice.actions.select(bus))
            router.push('/tripDetail');
        }
    };

    const filteredData = busList.buses.filter((trip) => {

        return (
            trip.departure === searchDeparture &&
            trip.arrival === searchArrival &&
            trip.date === searchDate
        );
    });
    
    const seferBulunduMessage = filteredData.length > 0
    ? `${filteredData.length} Sefer Bulundu`
    : "Uygun Sefer Bulunamadı";


    const tableRows = filteredData.map((trip: any) => (
        <tr
            key={trip.id}
            className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >

            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white" >
                {trip.id}
            </th>
            <td className="px-6 py-4">{trip.departure}</td>
            <td className="px-6 py-4">{trip.arrival}</td>
            <td className="px-6 py-4">{trip.date}</td>
            <td className="px-6 py-4">{trip.availableSeats}</td>
            <td className="px-6 py-4">{trip.price}</td>
            <td className="px-6 py-4">
                <button
                    className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 mt-4  text-white uppercase w-full rounded"
                    onClick={() => handleInspect(trip.id)}
                >
                    İncele
                </button>
            </td>
        </tr>))


    return (

        <div className="bg-white h-screen flex flex-col">
            <Navbar />
            <div className="bg-gray-800 h-screen">
                <div className="p-10 shadow-5xl rounded-xl overflow-hidden">
                    <div className="bg-gray-800 ">
                    <p className=' font-bold '>{seferBulunduMessage}</p>
                    </div>
                    <table className="w-full text-sm text-left text-white rounded-xl overflow-hidden">
                        <thead className="text-xs text-white uppercase bg-gray-900">
                            <tr className=''>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Departure
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Arrival
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available Seats
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Inquiry;

