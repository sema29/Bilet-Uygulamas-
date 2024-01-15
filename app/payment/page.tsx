"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [name, setName] = useState('');
    const [cvv, setCvv] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const router = useRouter();

    const handlePayment = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        router.push("/last")

        setLoading(false);
        setPaymentSuccess(true);
    };


    return (

        <div className="bg-white h-screen flex flex-col">
            <Navbar />
            <div className="bg-yellow-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-md">
                    

                    <form className="p-5 grid gap-2">
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'

                        />
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder='Card Number'

                        />
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder='Expiry Date'

                        />
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder='CVV'
                        />
                        <button
                            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-2 mt-2  text-white uppercase w-full rounded"
                            type="button"
                            onClick={handlePayment}
                        >
                            {loading ? 'Ödeme İşleniyor...' : 'Pay'}

                        </button>

                        {loading && (
                            <div className="mt-2 flex items-center justify-center">
                                {/* Spinner eklemek için uygun bir loading animasyonu kullanabilirsiniz */}
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-700"></div>
                            </div>
                        )}

                    </form>

                </div>
            </div>
        </div>

    );
};

export default PaymentPage;
